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

