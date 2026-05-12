const galeria = document.querySelector('.galeria-imagens');
const slides = Array.from(galeria.children);

const slideWidth = 420; // imagem + gap
let index = 0;

// DUPLICAÇÃO REAL (não manual no HTML)
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    galeria.appendChild(clone);
});

const total = slides.length;

function moveTo(index) {
    galeria.style.transition = "transform 0.6s ease";
    galeria.style.transform = `translateX(-${index * slideWidth}px)`;
}

function resetPosition() {
    galeria.style.transition = "none";
    galeria.style.transform = `translateX(0px)`;
    index = 0;
}

document.querySelector('.galeria-click.right').addEventListener('click', () => {
    index++;
    moveTo(index);

    // quando chega no fim REAL (não duplicado)
    if (index === total) {
        setTimeout(() => {
            resetPosition();
        }, 600);
    }
});

document.querySelector('.galeria-click.left').addEventListener('click', () => {
    if (index === 0) {
        galeria.style.transition = "none";
        index = total;
        galeria.style.transform = `translateX(-${index * slideWidth}px)`;

        setTimeout(() => {
            index--;
            moveTo(index);
        }, 20);
    } else {
        index--;
        moveTo(index);
    }
});