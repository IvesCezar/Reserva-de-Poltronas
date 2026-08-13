let sala = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
// funcções 
function mostrarGif(tipo = 'sucesso') {
    const overlay = document.getElementById('gifOverlay');
    const gif = document.getElementById('reserveGif');

    if (!overlay || !gif) return;

    gif.src = tipo === 'erro' ? 'assets/x-red.gif' : 'assets/success.gif';
    gif.alt = tipo === 'erro' ? 'Cadeira indisponível' : 'Sucesso';
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');

    setTimeout(() => {
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden', 'true');
    }, 1200);
}

function atualizarEstadoCadeira(cadeira, ocupada) {
    cadeira.classList.toggle('ocupada', ocupada);
    cadeira.classList.toggle('livre', !ocupada);
    cadeira.setAttribute('aria-pressed', ocupada ? 'true' : 'false');
}

function reservar (linha, coluna , cadeira) {
    if (sala[linha][coluna] == 0) {
        sala[linha][coluna] = 1;
        atualizarEstadoCadeira(cadeira, true);

        document.getElementById("mensagem").innerHTML = "Reservado com sucesso!";
        mostrarGif('sucesso');
    } else {
        document.getElementById("mensagem").innerHTML = "Cadeira indisponível!";
        mostrarGif('erro');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#sala button').forEach((cadeira) => {
        atualizarEstadoCadeira(cadeira, false);
    });
});