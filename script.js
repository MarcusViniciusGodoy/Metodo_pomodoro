//Variáveis
const html = document.querySelector('html');
const botao_foco = document.querySelector('.app__card-button--foco');
const botao_curto = document.querySelector('.app__card-button--curto');
const botao_longo = document.querySelector('.app__card-button--longo');
const imagens = document.querySelector('.app__image');
const altera_frases = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
            musica.play()
        } else {
            musica.pause()
        }
})

//Funções ao clicar nos botões
botao_foco.addEventListener('click', () =>{
    alterarContexto('foco');
    botao_foco.classList.add('active');
})

botao_curto.addEventListener('click', () =>{
    alterarContexto('descanso-curto');
    botao_curto.classList.add('active');
})

botao_longo.addEventListener('click', () =>{
    alterarContexto('descanso-longo');
    botao_longo.classList.add('active');
})

function alterarContexto(contexto){
    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    imagens.setAttribute('src', `/imagens/${contexto}.png`);
    switch(contexto){
        case "foco":
            altera_frases.innerHTML = `
            Otimize sua produtividade, <br>
                <strong class="app__title-strong">mergulhe no que importa</strong>
            `
            break;
        case "descanso-curto":
            altera_frases.innerHTML =`
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            altera_frases.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        alert('Tempo finalizado!');
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        zerar();
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}