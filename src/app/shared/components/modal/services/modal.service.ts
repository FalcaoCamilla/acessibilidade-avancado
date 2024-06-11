import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";
import { BodyInjectorService } from "./body-injector.service";
import { ModalRef } from "../models/model-ref";

/*
 * Não utilizaremos o componente ModalComponent através da sua forma declarativa app-modal. 
 * O componente será criado dinamicamente através do serviço ModalService que será o responsável em inserir o componente na view.
*/
@Injectable()
export class ModalService {
  private _componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    private _bodyInjectorService: BodyInjectorService,
    private _injector: Injector,
    componentFactory: ComponentFactoryResolver
  ) {
    /*
     * O ComponentFactoryResolver é a estrutura responsável por criar dinamicamente os componentes.
     * Através do método resolveComponentFactory, atribuído a uma propriedade do tipo ComponentFactory<T>, é possível determinar de qual tipo (T) será o componente criado.
     */
    this._componentFactory = componentFactory.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this._createComponentRef();
    // instance é a instância de ModalComponent
    componentRef.instance.config = config;
    // antes de retornar a referência, o service BodyInjector realoca o componente para antes do app-root através do stackBeforeAppRoot
    this._bodyInjectorService.stackBeforeAppRoot(componentRef)
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef
  }

  /*
  * O método create referenciado pela propriedade _componentFactory do tipo ComponentFactory<ModalComponent> instancia, finalmente, o componente;
  * Para utilizar o método create, deve-se fornecer os recursos necessários para o funcionamento correto do componente (injector);
  * O injector fornece a informação de como injetar as dependências necessárias para aquele componente, permitindo que o Angular resolva e injete as dependências corretamente no componente recém-criado.
  * Através de uma referência, seu retorno (um componentRef) pode ter sua instância manipulada;
  */ 
  private _createComponentRef(): ComponentRef<ModalComponent> {
    return this._componentFactory.create(this._injector);
  }
}