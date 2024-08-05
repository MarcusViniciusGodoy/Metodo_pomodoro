const html = document.querySelector('html')
const botao_foco = document.querySelector('.app__card-button--foco')
const botao_curto = document.querySelector('.app__card-button--curto')
const botao_longo = document.querySelector('.app__card-button--longo')

botao_foco.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
})

botao_curto.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-curto')
})

botao_longo.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-longo')
})