
let screen 
let a=[]//перше число 
let sig=''//знак 
let b=''//друге
let siggn=['=','+','-','x','/','.']
let btn
let buttons=['0','1','2','3','4','5','6','7','8','9','<-','+','=']




//  function yyy(){
//      document.querySelector("body > div.calc > div.screen > p").append(div.btn.nine)
//      }
let result=''
function vvod(){
btn = document.querySelectorAll('.butons div');
screen = document.querySelector('body > div.calc > div.screen > p');
  
  btn.forEach(get);
   
  function get(btn){
  	btn.addEventListener('click', function(){
    screen.innerHTML =btn.innerHTML;
     
    })
  
  }
  if(buttons.includes(screen.innerHTML)){ result+=screen.innerHTML
  
  }
if(screen.innerHTML=='='){screen.innerHTML=result}
}
// if (siggn.includes(e.innerHTML))alert ('tru')
 


// document.addEventListener("click", function(e) {
//   if (e.target.className=="butons") {
//     alert('c')
//    //ваши действия
//   }
// }); якщо попадаєш на кнопки     
