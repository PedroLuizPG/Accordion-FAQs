document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  const container = document.querySelector('.container-accordion')
  const responsive = document.querySelector('.container')
  

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

      const accordionAtivo = document.querySelector('.accordion-body.active')
      if(accordionAtivo) {
        container.style.marginTop = '0'
        responsive.style.height = 'auto'
        
        img.src = 'assets/images/icon-minus.svg'
        
      }else {
        container.style.marginTop = '60px'
        img.src = 'assets/images/icon-plus.svg'
      }
      
    });
  });
});