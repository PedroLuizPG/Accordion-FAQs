# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/user-attachments/assets/3742c54e-ad56-4db9-8c83-0706602efe8f)

### Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL: (https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- Mobile-first workflow

### What I learned

```Css
.accordion-header span {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} Faz com que não quebre a linha, se a frase for maior que o bloco irá fazer que apareça "..." 
```
```css
.bg{
  background-image: url(assets/images/background-pattern-desktop.svg);
  position: absolute;
}
.container{
  z-index: 1;
} O elemento com a classe .bg terá uma imagem de fundo e será posicionado de forma absoluta, removido do fluxo normal do documento.
  O elemento com a classe .container terá um z-index de 1, garantindo que ele apareça acima do elemento .bg.
```
```js
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const currentlyActiveAccordion = document.querySelector('.accordion-body.active' );
      const accordionBody = header.nextElementSibling;
      const img = header.querySelector('img')

      if (currentlyActiveAccordion && currentlyActiveAccordion !== accordionBody) {
        currentlyActiveAccordion.classList.remove('active');
        const activeHeader = currentlyActiveAccordion.previousElementSibling;
        const activeIcon = activeHeader.querySelector('img');
        activeIcon.src = 'assets/images/icon-plus.svg';
      }
      accordionBody.classList.toggle('active');
} Este código permite que você tenha um acordeão onde apenas um item pode estar aberto por vez. Quando um cabeçalho é clicado, ele verifica se há um acordeão atualmente aberto (diferente do clicado) e, se houver, ele o fecha. Em seguida, alterna o estado do acordeão correspondente ao cabeçalho clicado, abrindo-o se estava fechado e fechando-o se estava aberto. Além disso, altera o ícone no cabeçalho de acordo com o estado do acordeão.
```

### Continued development

Este é o meu segundo desafio feito, e sinto que cada vez mais melhoro minhas habilidades no flexbox, me desafiei criando funções com javascript para abrir e fechar as caixas de perguntas, continuarei a estudar mais funções com javascript.

### Author

- Linkedin - [Pedro Gois]((https://www.linkedin.com/in/pedro-gois-922071235/))
- Frontend Mentor - [@PedroLuizPG]((https://www.frontendmentor.io/profile/PedroLuizPG))
- Instagram - [@peuluiz_]((https://www.instagram.com/peuluiz_/))

