export function scrollUp() {
    const box = document.querySelector('.box');
    box.scrollTop -= 50; // Modifier la valeur pour ajuster la quantité de défilement
  }

  export function scrollDown() {
    const box = document.querySelector('.box');
    box.scrollTop += 50; // Modifier la valeur pour ajuster la quantité de défilement
  }
