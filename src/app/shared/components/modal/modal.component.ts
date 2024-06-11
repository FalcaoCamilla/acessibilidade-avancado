import { Component, HostBinding } from "@angular/core";
import { ModalConfig } from "./interfaces/modal-config";
import { fade } from "../../animations/fade";
import { ModalRef } from "./models/model-ref";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})

export class ModalComponent {
  /*
   * Sempre que o componente for renderizado, o elemento host terá a animação de "fade in" ativada.
   */
  @HostBinding('@fade') fade = true;
  public modalRef: ModalRef;
  public config: ModalConfig;

}