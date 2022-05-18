heightBtn = document.querySelector('.calc')
heightScreen = document.querySelector('.screen')
let btn = document.querySelectorAll("body > div > div.butons > div.btn")
let screen = document.querySelector('body > div.calc > div.screen > p');

//перше число 
let sig = ''//знак 
let siggn = ['+', '-', 'x', '/']
let buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']




//  function yyy(){
//      document.querySelector("body > div.calc > div.screen > p").append(div.btn.nine)
//      }
let result1 = ''
let result = ''
let sign = ''
let a = ''
let b = ''

btn.forEach(bbb => {
  bbb.addEventListener('click', function () {
    screen.innerHTML = bbb.innerHTML

    // result+=btn.innerHTML
    // function unic(arr){
    //   let iii=[]
    // for(let str of arr){
    //   if(!iii.includes(str)){
    //     iii.push(str)
    //   }return iii}

    // }
    // screen.innerHTML=unic.result




    // document.addEventListener("click", function(e) {
    //   if (e.target.className=="butons") {
    //     alert() 
    //     return

    //   }
    // }); //якщо не попадаєш на кнопки     
    if (buttons.includes(screen.innerHTML) && sign == '') {
      a += screen.innerHTML
    }

    else if (siggn.includes(screen.innerHTML) && a !== '') {
      sign += screen.innerHTML
    }
    // else if (sign[0].includes('-')){
    //   // sign=sign[1]
    // alert (sign[1])}
    else if (buttons.includes(screen.innerHTML) && sign !== '') {
      b += screen.innerHTML
    }


    // else if (sign.length==2){
    // alert(sign)

    // }
    // else if (sign.length>1){a=result
    // }

    result += screen.innerHTML
    if (result.includes('C')) {
      result = ''
      a = '',
        b = '',
        sign = ''
    }

    if (result.includes('&lt')) {
      result = result.slice(0, -5)
      if (b !== '') {
        b = b.slice(0, -1)
      }
      else if (b == '' && sign !== '') {
        sign = sign.slice(0, -1)
      }
      else if (b == '' && sign == '') {
        a = a.slice(0, -1)
      }
    }
    //    alert (a)
    //    alert(b)
    // alert(sign)


    if (a == "" && result.includes('x')) {
      result = ''

    }
    if (a == "" && result.includes('/')) {           //Якогось хуя не працювало в одному через або(||) 
      result = ''
    }
    if (a == "" && result.includes('+')) {           //Якогось хуя не працювало в одному через або(||) 
      result = ''
    }

    screen.innerHTML = result


    //    alert (a)
    //    alert(b)
    // alert(sign)
    // if (siggn.includes(result[0])){result=''
    // sign=''}


    // alert(a)
    // alert(sign)
    // alert(b)



    if (siggn.includes(sign[1]) || screen.innerHTML.includes('=')) {
      if (screen.innerHTML[0].includes('-')) {
        a = (-(a))
      }
      switch (sign[0]) {
        case '-':
          a = (+a - (+b))
          break
        case '+':
          a = (+a + (+b))
          break
        case '/':
          a = (a / b)
          break
        case 'x':
          a = (a * b)
          break

      }
      sign = sign[1]
      b = ''
      // alert("a="+a)
      // alert('sign='+sign)
      // if(buttons.includes(screen.innerHTML) && sign==''){
      //   a+=screen.innerHTML }

      //   else if (siggn.includes(screen.innerHTML)&& a!==''){
      //     sign+=screen.innerHTML
      //   }
      //   // else if (sign[0].includes('-')){
      //   //   // sign=sign[1]
      //   // alert (sign[1])}
      //   else if (buttons.includes(screen.innerHTML) && sign!==''){
      // b+=screen.innerHTML
      //   }
if (!Number.isInteger(a)){
  a=(+a).toFixed(2)
}



      if (screen.innerHTML.includes('=')) {
        // if (!Number.isInteger(a)) {
        //   screen.innerHTML = result + (+a).toFixed(2)

        // }
        // else {
          screen.innerHTML = result + (+a)
        // }
        // a=``
        b = ``
        sign = ``
        result = a

let oooo=eval(result)
alert(oooo)
      }

    }

    //  alert('b='+b)

    // }
    //  alert(a)
    // alert(sign)

    // alert(b)
    // if (screen.innerHTML=='+')
    // if(screen.innerHTML.includes('=')){
    //  if(screen.innerHTML[0]=='-'){
    //   a=(-a)
    //  }
    // switch(sign){
    //   case '-':
    //   screen.innerHTML=result+(+a-(+b)).toFixed(1)
    //   break 
    //   case '+':
    //     screen.innerHTML=result+(+a+(+b))
    //     break
    //     case '/':
    //       screen.innerHTML=result+(a/b).toFixed(2)
    //       break 
    //       case 'x':
    //         screen.innerHTML=result+(a*b).toFixed(2)
    //         break

    // }
    if (screen.innerHTML.length > 20) {
      heightScreen.style.height = '250px'
      heightBtn.style.height = '610px'
    }
    // result=''
    // a='',
    // b='',
    // sign=''
    // } 
    // alert(a,sign,b)


    //    if(buttons.includes(screen.innerHTML) ) { result+=screnerHTML en.in
    //     } 
    //     if( screen.innerHTML=='+') {b+=screen.innerHTML}
    // alert(b)
    // // function iii(){
    // //    b+=screen.innerHTML
    // //   }//alert(b)
    //  if(screen.innerHTML=='='){screen.innerHTML=(result)}




    // if (siggn.includes(e.innerHTML))alert ('tru')



  }

  )
})

console.log(eval('2 + 2 * 3-5667 '))
