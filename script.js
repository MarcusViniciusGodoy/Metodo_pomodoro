//Variáveis
const html = document.querySelector('html')
const botao_foco = document.querySelector('.app__card-button--foco')
const botao_curto = document.querySelector('.app__card-button--curto')
const botao_longo = document.querySelector('.app__card-button--longo')
const imagens = document.querySelector('.app__image')
const altera_frases = document.querySelector('.app__title')

//Funções ao clicar nos botões
botao_foco.addEventListener('click', () =>{
    alterarContexto('foco')
})

botao_curto.addEventListener('click', () =>{
    alterarContexto('descanso-curto')
})

botao_longo.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto){
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