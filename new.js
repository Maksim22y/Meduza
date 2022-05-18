let btn = document.querySelectorAll("body > div > div.butons > div.btn")
let scren = document.querySelector('body > div.calc > div.screen > p');
btn.forEach(buttons => {
    buttons.addEventListener('click', function () {
    scren.innerHTML+=buttons.innerHTML
        if (scren.innerHTML.includes('=')) {
            let result=eval(scren.innerHTML.slice(0,-1))
            if(!Number.isInteger(result)){
         scren.innerHTML=(+result).toFixed(2)
        }else{scren.innerHTML=result}
    }
    if (scren.innerHTML.includes('&lt')){
        scren.innerHTML=scren.innerHTML.slice(0,-5)
    }
    if(scren.innerHTML.includes('C')){
        scren.innerHTML=' '
    }
})
}) 