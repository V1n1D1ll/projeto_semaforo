const turngreen = document.getElementById('turngreen')
const turnyellow = document.getElementById('turnyellow')
const turnred = document.getElementById('turnred')
const turnall = document.getElementById('turnall')
const semaf = document.getElementById('semaf')

function semafgreen() {
    semaf.src = './img/verde.png'
}

function semafyellow() {
    semaf.src = './img/amarelo.png'
}

function semafred() {
    semaf.src = './img/vermelho.png'
}

function semafall() {
    let position = -1
    setInterval(start, 1000)

    function start() {
        position = position + 1

        if (position > 2) position = 0

        if (position == 2) semafgreen()
        if (position == 1) semafyellow()
        if (position == 0) semafred()
    }
}

turngreen.addEventListener('click', semafgreen)
turnred.addEventListener('click', semafred)
turnyellow.addEventListener('click', semafyellow)
turnall.addEventListener('click', semafall)