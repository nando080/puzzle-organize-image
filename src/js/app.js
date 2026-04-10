const difficultySelector = document.querySelector('.options__toggle')

difficultySelector.addEventListener('click', () => {
    const isEasy = difficultySelector.classList.contains('options__toggle--easy')
    const isRegular = difficultySelector.classList.contains('options__toggle--regular')
    difficultySelector.classList.remove('options__toggle--easy', 'options__toggle--regular')
    if (isEasy) {
        difficultySelector.classList.add('options__toggle--regular')
    }
    if (isRegular) {
    difficultySelector.classList.add('options__toggle--easy')
    }
})

console.log(difficultySelector)