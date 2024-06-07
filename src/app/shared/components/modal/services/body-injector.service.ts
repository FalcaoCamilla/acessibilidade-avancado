import { ApplicationRef, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BodyInjectorService {
  /* 
  * O applicationRef é uma referência à uma aplicação Angular
  */
  constructor(private _appRef: ApplicationRef) {

  }
}