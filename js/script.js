/* =========================
   GALERIA CARROSSEL INFINITO FLUIDO
========================= */

const galeria = document.querySelector('.galeria-imagens');

if (galeria) {
    const slides = Array.from(galeria.children);
    const slideWidth = 420;

    let index = slides.length;

    /* =========================
       CLONES (COMEÇO E FIM)
    ========================= */

    // clones no final
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        galeria.appendChild(clone);
    });

    // clones no início
    slides.slice().reverse().forEach(slide => {
        const clone = slide.cloneNode(true);
        galeria.insertBefore(clone, galeria.firstChild);
    });

    const totalOriginal = slides.length;

    /* =========================
       POSICIONAMENTO INICIAL
    ========================= */

    galeria.style.transform = `translateX(-${index * slideWidth}px)`;

    function moveGallery() {
        galeria.style.transition = 'transform 0.6s ease';
        galeria.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    /* =========================
       BOTÕES
    ========================= */

    const nextButton = document.querySelector('.galeria-click.right');
    const prevButton = document.querySelector('.galeria-click.left');

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
       RESET INVISÍVEL (LOOP REAL)
    ========================= */

    galeria.addEventListener('transitionend', () => {
        galeria.style.transition = 'none';

        // passou do final real
        if (index >= totalOriginal * 2) {
            index = totalOriginal;
            galeria.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        // voltou antes do início real
        if (index < totalOriginal) {
            index = totalOriginal + (index % totalOriginal);
            galeria.style.transform = `translateX(-${index * slideWidth}px)`;
        }
    });
}
/* =========================
   DEPOIMENTOS CARROSSEL
========================= */

const depoimentos = document.querySelector('.depoimentos-container');

if (depoimentos) {
    const btnLeft = document.querySelector('.depoimentos-click.left');
    const btnRight = document.querySelector('.depoimentos-click.right');
    const cards = document.querySelectorAll('.card-depoimento');

    const cardWidth = cards[0].offsetWidth + 20;
    const totalCards = cards.length;

    let index = 0;

    depoimentos.style.transition = 'transform 0.6s ease';

    function move() {
        depoimentos.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    btnRight.addEventListener('click', () => {
        index++;
        move();

        // quando chega no clone final
        if (index === totalCards - 2) {
            setTimeout(() => {
                depoimentos.style.transition = 'none';
                index = 0;
                move();
                requestAnimationFrame(() => {
                    depoimentos.style.transition = 'transform 0.6s ease';
                });
            }, 600);
        }
    });

    btnLeft.addEventListener('click', () => {
        if (index === 0) {
            depoimentos.style.transition = 'none';
            index = totalCards - 2;
            move();
            requestAnimationFrame(() => {
                depoimentos.style.transition = 'transform 0.6s ease';
            });
        }

        index--;
        move();
    });
}
///// MENU SUPERIOR ///////////

const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');

if (menu && btn) {

    btn.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });

    // fecha ao clicar em um link (comportamento profissional)
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('ativo');
        });
    });

    // fecha ao clicar fora do menu
    document.addEventListener('click', (e) => {
        const clicouNoMenu = menu.contains(e.target);
        const clicouNoBotao = btn.contains(e.target);

        if (!clicouNoMenu && !clicouNoBotao) {
            menu.classList.remove('ativo');
        }
    });

    // ESC fecha também
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.classList.remove('ativo');
        }
    });
}