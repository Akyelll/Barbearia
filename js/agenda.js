const form = document.querySelector('#form-agendamento');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const mensagem = `Olá! Gostaria de agendar...`;

    const numero = '5541999999999';

    const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});