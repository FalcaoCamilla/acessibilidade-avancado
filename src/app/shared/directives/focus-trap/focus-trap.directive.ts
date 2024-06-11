import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  /*
   * Ao definir o seletor com colchetes, determina-se a utilização da diretiva como atributo
   */
  selector: '[appFocusTrap]'
})

export class FocusTrapDirective implements AfterViewInit {
  private _firstFocusableElement: HTMLElement = null;
  private _lastFocusableElement: HTMLElement = null;

  constructor(private _elementRef: ElementRef<any>) {

  }

  ngAfterViewInit(): void {
    const focusableElements = this._elementRef
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`
      ) as Array<HTMLElement>;
    this._firstFocusableElement = focusableElements[0];
    this._lastFocusableElement = focusableElements[focusableElements.length -1];
    this._firstFocusableElement.focus();
  }

  @HostListener('keydown', ['$event'])
  public manageTab(event: KeyboardEvent): void {
    if(event.key !== 'Tab') {
      return
    }
    if(event.shiftKey && document.activeElement === this._firstFocusableElement) {
      this._lastFocusableElement.focus();
      event.preventDefault();
    } else if(document.activeElement === this._lastFocusableElement) {
      this._firstFocusableElement.focus();
      event.preventDefault();
    }

  }
}