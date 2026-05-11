const galeria = document.querySelector('.galeria-imagens');
const left = document.querySelector('.galeria-click.left');
const right = document.querySelector('.galeria-click.right');

let position = 0;
const step = 420;
const totalItems = 5; // imagens reais

right.addEventListener('click', () => {
    position++;

    galeria.style.transition = "transform 0.5s ease";
    galeria.style.transform = `translateX(-${position * step}px)`;

    // quando chegar no fim "real"
    if (position === totalItems) {

        setTimeout(() => {
            galeria.style.transition = "none";
            position = 0;
            galeria.style.transform = `translateX(0px)`;
        }, 500); // mesmo tempo do transition
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
    const header = document.querySelector(".header");
    const btnTopo = document.getElementById("btn-topo");

    const btnPlanetas = document.querySelector(".toggle-planetas");
    const listaPlanetas = document.querySelector(".menu-planetas");

    window.addEventListener("scroll", () => {

      header.classList.toggle("sumir", window.scrollY > 50);

      btnTopo.style.display = window.scrollY > 300
        ? "block"
        : "none";

    });

    btnPlanetas.addEventListener("click", () => {
      listaPlanetas.classList.toggle("ativo");
    });

    btnTopo.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });
