/*треба спочатку придумати план:
Нам потрібно щоб цифри на які нажали -виводились на дисплей і кудись сохранялись де 
можна буде провести з ними якісь операції 
Нехай let screen- це буде наш екран(тоді ми якось підключимо,бо я не
 їбу як це робиться/не дойшов я ще туди,а вчора дивися,то така діч//треба поступово*/
//Я ніхера не робив,бо пари і скоро сесія /це я просто грався/пробував/видаляв/не знаю як краще 
// багатьма способами можна,але не знаю як краще/І ще треба якось зробити 
//щоб  записувалось в число "б" після знаку   ))Так що ніхера я тут не зробив
let screen //треба якось підключити її до екрану 
let a=""//перше число 
let sig=''//знак 
let b=''//друге
let siggn=['=','+','-','x','/','.']
let btn=prompt();//це клік на якесь число(якось треба зробити )
let buttons=['0','1','2','3','4','5','6','7','8','9','<-']
function count(){
    if(buttons.includes(btn)){       //якщо масив батонс включає btn(те що ми клікнемо) то  перше                               //число буде btn 
        a+=btn                        //число буде =btn
           }
           if (a!=""){
            // if (buttons.includes(btn)){
            //     b+=btn
            // }
            b+=btn
        }
        
}
// if (siggn.includes(btn)) {
//     sig+=btn   
// }
switch(sig){
    case '+':
        alert  (+(a)+(+b))
        break
        case '-':
            alert (+(a)-(+b))
            break
            case 'x':
            alert (a*b)
            break
            case '/':
            alert (a/b)
            break
           
}


count()

// function fff(a,sig,b){
//     if(buttons.includes(btn)){
//         a+=btn 
//     }
// }
