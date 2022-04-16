
let screen 
//перше число 
let sig=''//знак 
let siggn=['+','-','x','/'] 
let btn
let buttons=['0','1','2','3','4','5','6','7','8','9','.']




//  function yyy(){
//      document.querySelector("body > div.calc > div.screen > p").append(div.btn.nine)
//      }
let result1=''
let result=''
let sign=''
let a=''
let b=''
function vvod(){
btn = document.querySelectorAll('.butons div');
screen = document.querySelector('body > div.calc > div.screen > p');
  
  btn.forEach(get);
   
  function get(btn){
  	btn.addEventListener('click', function(){

  screen.innerHTML=btn.innerHTML
      // result+=btn.innerHTML
      // function unic(arr){
      //   let iii=[]
      // for(let str of arr){
      //   if(!iii.includes(str)){
      //     iii.push(str)
      //   }return iii}
        
      // }
      // screen.innerHTML=unic.result

      
     
    })
    
  }
  if(buttons.includes(screen.innerHTML) && sign=='' ){
  a+=screen.innerHTML}
  else if (siggn.includes(screen.innerHTML) ){
    sign=screen.innerHTML
  }
  else if (buttons.includes(screen.innerHTML) && sign!==''){
b+=screen.innerHTML
  }
  result+=screen.innerHTML
 
  // if (screen.innerHTML=='+')
if(screen.innerHTML=='='){
switch(sign){
  case '-':
  screen.innerHTML=result+(+a-(+b))
  break 
  case '+':
    screen.innerHTML=result+(+a+(+b))
    break
    case '/':
      screen.innerHTML=result+(a/b).toFixed(1)
      break 
      case 'x':
        screen.innerHTML=result+(a*b).toFixed(1)
        break

}
result=''
a='',
b='',
sign=''
}
}

//    if(buttons.includes(screen.innerHTML) ) { result+=screnerHTML en.in
//     } 
//     if( screen.innerHTML=='+') {b+=screen.innerHTML}
// alert(b)
// // function iii(){
// //    b+=screen.innerHTML
// //   }//alert(b)
//  if(screen.innerHTML=='='){screen.innerHTML=(result)}


  
 
// if (siggn.includes(e.innerHTML))alert ('tru')



// document.addEventListener("click", function(e) {
//   if (e.target.className=="butons") {
//     alert('c')
//    //ваши действия
//   }
// }); якщо попадаєш на кнопки     
