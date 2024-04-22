import { Injectable, TemplateRef } from "@angular/core";

/*
 * Não utilizaremos o componente ModalComponent através da sua forma declarativa app-modal. 
 * O componente será criado dinamicamente através do serviço ModalService que será o responsável em inserir o componente na view.
*/
@Injectable()
export class ModalService {

  public open(config: ModalConfig): ModalRef {
    return new ModalRef();
  }
}

/*
 *  Define a estrutura que um objeto precisa ter para ser passado como parâmetro para o método "open()"
*/
export interface ModalConfig {
  templateRef: TemplateRef<any>,
  title: string
}

/*
 *  Utilizada para criar instâncias que representam referências para fechar o modal.
*/
export class ModalRef {
  public close() {

  }
}