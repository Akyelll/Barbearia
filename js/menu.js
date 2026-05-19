
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