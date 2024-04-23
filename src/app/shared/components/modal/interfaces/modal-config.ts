import { TemplateRef } from "@angular/core";

/*
 *  Define a estrutura que um objeto precisa ter para ser passado como parâmetro para o método "open()"
*/
export interface ModalConfig {
  templateRef: TemplateRef<any>,
  title: string
}