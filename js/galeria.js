/* =========================
   GALERIA CARROSSEL INFINITO
========================= */

const galeria = document.querySelector('.galeria-imagens');

if (galeria) {

    const slides = Array.from(galeria.children);

    let index = slides.length;

    let slideWidth = 0;

    /* =========================
       CALCULA LARGURA REAL
    ========================= */

    function updateSlideWidth() {

        const slide = galeria.children[0];

        const style = window.getComputedStyle(galeria);

        const gap = parseInt(style.gap) || 0;

        slideWidth = slide.offsetWidth + gap;
    }

    /* =========================
       CLONES
    ========================= */

    slides.forEach(slide => {

        const clone = slide.cloneNode(true);

        galeria.appendChild(clone);

    });

    slides.slice().reverse().forEach(slide => {

        const clone = slide.cloneNode(true);

        galeria.insertBefore(clone, galeria.firstChild);

    });

    const totalOriginal = slides.length;

    /* =========================
       POSIÇÃO
    ========================= */

    function setInitialPosition() {

        updateSlideWidth();

        galeria.style.transition = 'none';

        galeria.style.transform =
            `translateX(-${index * slideWidth}px)`;
    }

    function moveGallery() {

        galeria.style.transition = 'transform 0.6s ease';

        galeria.style.transform =
            `translateX(-${index * slideWidth}px)`;
    }

    /* =========================
       BOTÕES
    ========================= */

    const nextButton =
        document.querySelector('.galeria-click.right');

    const prevButton =
        document.querySelector('.galeria-click.left');

    if (nextButton) {

        nextButton.addEventListener('click', () => {

            index++;

            moveGallery();

        });
    }

    if (prevButton) {

        prevButton.addEventListener('click', () => {

            index--;

            moveGallery();

        });
    }

    /* =========================
       AUTO PLAY
    ========================= */

    let autoPlay = setInterval(() => {

        index++;

        moveGallery();

    }, 3000);

    /* =========================
       PAUSAR HOVER
    ========================= */

    galeria.addEventListener('mouseenter', () => {

        clearInterval(autoPlay);

    });

    galeria.addEventListener('mouseleave', () => {

        autoPlay = setInterval(() => {

            index++;

            moveGallery();

        }, 3000);

    });

    /* =========================
       LOOP INFINITO
    ========================= */

    galeria.addEventListener('transitionend', () => {

        galeria.style.transition = 'none';

        if (index >= totalOriginal * 2) {

            index = totalOriginal;

        }

        if (index < totalOriginal) {

            index = totalOriginal + (index % totalOriginal);

        }

        galeria.style.transform =
            `translateX(-${index * slideWidth}px)`;

    });

    /* =========================
       RESPONSIVO
    ========================= */

    window.addEventListener('resize', () => {

        setInitialPosition();

    });

    /* =========================
       INICIALIZA
    ========================= */

    window.addEventListener('load', () => {

        setInitialPosition();

    });

}






