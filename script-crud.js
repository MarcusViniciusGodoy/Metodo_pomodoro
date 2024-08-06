const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionartarefa = document.querySelector('.app__form-add-task');

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionartarefa.classList.toggle('hidden');
})