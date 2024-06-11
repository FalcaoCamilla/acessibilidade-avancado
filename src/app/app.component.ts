import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalRef } from './shared/components/modal/models/model-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  title = 'a11y-p2';
  public firstName = 'Camilla';
  public modalRef: ModalRef;

  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      firstName: ['Camilla', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    })
  }

  public show(): void {
    this.modalRef = this._modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details'
    })
  }

  public submit() {
    if(this.form.invalid) {
      return
    }
  }
}
