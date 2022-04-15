
let screen 
let a=[]//перше число 
let sig=''//знак 
let b=''//друге
let siggn=['+','-','x','/','.'] 
let btn
let buttons=['0','1','2','3','4','5','6','7','8','9']




//  function yyy(){
//      document.querySelector("body > div.calc > div.screen > p").append(div.btn.nine)
//      }
let u=''
let result=''
let i=''
function vvod(){
btn = document.querySelectorAll('.butons div');
screen = document.querySelector('body > div.calc > div.screen > p');
  
  btn.forEach(get);
   
  function get(btn){
  	btn.addEventListener('click', function(){
    screen.innerHTML =btn.innerHTML;
    })
  }
  if(buttons.includes(screen.innerHTML) && u=='' ){
  result+=screen.innerHTML}
  else if (siggn.includes(screen.innerHTML) ){
    u=screen.innerHTML
  }
  else if (buttons.includes(screen.innerHTML) && u!==''){
i+=screen.innerHTML
  }
// if (screen.innerHTML=='+')
if(screen.innerHTML=='='){alert (result),alert(u),alert(i)}
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
