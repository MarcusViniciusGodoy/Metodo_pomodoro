const html = document.querySelector('html')
const botao_foco = document.querySelector('.app__card-button--foco')
const botao_curto = document.querySelector('.app__card-button--curto')
const botao_longo = document.querySelector('.app__card-button--longo')
const imagens = document.querySelector('.app__image')

//Funções ao clicar nos botões
botao_foco.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
    imagens.setAttribute('src', '/imagens/foco.png')
})

botao_curto.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-curto')
    imagens.setAttribute('src', '/imagens/descanso-curto.png')
})

botao_longo.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-longo')
    imagens.setAttribute('src', '/imagens/descanso-longo.png')
})