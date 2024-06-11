import { animate, style, transition, trigger } from "@angular/animations";

export const fade = trigger(
  'fade',
  [
    transition(
      ':enter',
      /* 
       * Transição que se aplica quando o elemento entra no DOM (ou seja, quando Angular o insere na visualização). 
       * :enter é um estado de animação predefinido no Angular que representa a inserção do elemento.
       */
      [  
        style({opacity: 0}),
        /*
         * No início da animação, o estilo do elemento é definido com uma opacidade de 0, tornando-o completamente invisível.
         */
        animate(100, style({opacity: 1}))
        /*
         * Anima-se a mudança de estilo durante 1000 milissegundos (1 segundo), aumentando a opacidade do elemento de 0 para 1, fazendo com que o elemento se desvaneça (fade in) e fique completamente visível ao final da animação.
         */
      ]
    ),
    transition(
      ':leave',
      [
        animate(100, style({opacity: 0}))
      ]
    )
  ]
)
