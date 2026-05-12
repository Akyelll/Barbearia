const galeria = document.querySelector('.galeria-imagens');
const left = document.querySelector('.galeria-click.left');
const right = document.querySelector('.galeria-click.right');

if (galeria && left && right) {

    let position = 0;
    const step = 420;
    const totalItems = 5;

    right.addEventListener('click', () => {
        position++;

        galeria.style.transition = "transform 0.5s ease";
        galeria.style.transform = `translateX(-${position * step}px)`;

        if (position === totalItems) {

            setTimeout(() => {
                galeria.style.transition = "none";
                position = 0;
                galeria.style.transform = `translateX(0px)`;
            }, 500);
        }
    });

    left.addEventListener('click', () => {

        if (position === 0) {

            galeria.style.transition = "none";
            position = totalItems;
            galeria.style.transform = `translateX(-${position * step}px)`;

            setTimeout(() => {
                galeria.style.transition = "transform 1.1s ease";
                position--;
                galeria.style.transform = `translateX(-${position * step}px)`;
            }, 20);

        } else {

            position--;
            galeria.style.transform = `translateX(-${position * step}px)`;
        }

    });

}