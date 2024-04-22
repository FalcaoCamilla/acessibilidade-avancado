import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  title = 'a11y-p2';
  public firstName = 'Camilla';
  public modalRef: ModalRef;

  constructor(private _modalService: ModalService) {}
  public show(): void {
    this.modalRef = this._modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details'
    })
  }
}
