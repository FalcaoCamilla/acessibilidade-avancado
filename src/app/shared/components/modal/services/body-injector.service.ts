import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BodyInjectorService {
  /* 
   * O applicationRef é uma referência à uma aplicação Angular
   */
  constructor(private _appRef: ApplicationRef) {}

  /* 
   * O método stackBeforeAppRoot pega o elemento do DOM do componentRef para adicioná-lo antes do app-root
   */
  public stackBeforeAppRoot(componentRef: ComponentRef<any>) {
    const domElement = this._createDomElement(componentRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot);
  }

  private _createDomElement(componentRef: ComponentRef<any>): HTMLElement {
    /*
     * Recapitulando, componentRef é um wrapper e dentro dele, além da instância, há o hostView, que é uma referência para o template do componente encapsulado por ComponentRef.
     * O attachView
     */
    this._appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    return domElement
  }
}