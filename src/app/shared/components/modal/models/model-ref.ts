import { ComponentRef } from "@angular/core";
import { ModalComponent } from "../modal.component";

/*
 *  Utilizada para criar instâncias que representam referências para fechar o modal.
 */
export class ModalRef {

  constructor(private _componentRef: ComponentRef<ModalComponent>) {}

  public close(): void {
    this._componentRef.destroy();
  }
}