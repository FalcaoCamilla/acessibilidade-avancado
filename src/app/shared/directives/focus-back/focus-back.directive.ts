import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: '[appFocusBack]'
})

export class FocusBackDirective implements OnInit, OnDestroy {
  private _lastFocusedElement: Element;

  public ngOnInit(): void {
    /*
     * O document.activeElemente é uma referência para o elemento com focus dentro do documento (página) exibida.
     */
    this._lastFocusedElement = document.activeElement;
  }

  public ngOnDestroy(): void {
    if(this._lastFocusedElement) {
      (this._lastFocusedElement as HTMLElement).focus()
    }
  }
}