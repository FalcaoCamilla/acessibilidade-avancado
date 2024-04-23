import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";

/*
 * Não utilizaremos o componente ModalComponent através da sua forma declarativa app-modal. 
 * O componente será criado dinamicamente através do serviço ModalService que será o responsável em inserir o componente na view.
*/
@Injectable()
export class ModalService {
  private _componentFactory: ComponentFactory<ModalComponent>;

  constructor(
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
    componentRef.instance.config = config;
    // instance é a instância de ModalComponent
    return new ModalRef(componentRef);
  }

  /*
  * O método create referenciado pela propriedade _componentFactory do tipo ComponentFactory<ModalComponent> instancia, finalmente, o componente;
  * Para utilizar o método create, deve-se fornecer os recursos necessários para o funcionamento correto do componente (injector);
  * Através de uma referência, seu retorno (um componentRef) pode ter sua instância manipulada;
  */ 
  private _createComponentRef(): ComponentRef<ModalComponent> {
    return this._componentFactory.create(this._injector);
  }
}
/*
 *  Utilizada para criar instâncias que representam referências para fechar o modal.
 */
export class ModalRef {

  constructor(private _componentRef: ComponentRef<ModalComponent>) {}

  public close(): void {
    this._componentRef.destroy();
  }
}