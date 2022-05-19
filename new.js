let btn = document.querySelectorAll("body > div > div.butons > div.btn")
let scren = document.querySelector('body > div.calc > div.screen > p')
heightBtn = document.querySelector('.calc')
heightScreen = document.querySelector('.screen')

btn.forEach(buttons => {
    buttons.addEventListener('click', function () {
        scren.innerHTML += buttons.innerHTML
        if (scren.innerHTML.includes('=')) {
            let result = eval(scren.innerHTML.slice(0, -1))
            if (!Number.isInteger(result)) {
                scren.innerHTML = (+result).toFixed(2)
            } else { scren.innerHTML = result }
        }
        if (scren.innerHTML.includes('&lt')) {
            scren.innerHTML = scren.innerHTML.slice(0, -5)
        }
        if (scren.innerHTML.includes('C')) {
            scren.innerHTML = ''
        }
        if (scren.innerHTML[0].includes('/') || scren.innerHTML[0].includes('+') || scren.innerHTML[0].includes('*') || scren.innerHTML[0].includes('.')) {
            scren.innerHTML = ''
        }
        if (scren.innerHTML.length > 20) {
            heightScreen.style.height = '250px'
            heightBtn.style.height = '610px'
        }
        if (scren.innerHTML.length > 40) {
            scren.innerHTML = scren.innerHTML.slice(0, -1)
            alert('На жаль,в нашому калькуляторові закінчилось місце для вводу символів!!!Спробуйте видалити кілька символів!')
        }
    })
})
 