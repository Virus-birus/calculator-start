const result = document.querySelector('.result')
const btnn = document.querySelector('.Btns')
// const buttonn = document.querySelector('.button')
// const button_ac = document.querySelector('.button_ac')

btnn.addEventListener('click', function (event) {
    if (!event.target.classList.contains('button')) return

    const value = event.target.innerText

    switch (value) {
        case 'AC':
            result.innerText = ''
            break
        case '=':
            result.innerText = eval(result.innerText).toFixed(2)
            break
        default:
            result.innerText += value
            break
    }
})
