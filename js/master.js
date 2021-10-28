let seconds = document.querySelector(".seconds .number") ; 
let minutes = document.querySelector(".minutes .number") ; 
let hours = document.querySelector(".hours .number") ; 
let days = document.querySelector(".days .number") ;
function count(){
    if(seconds.innerHTML==0){
        seconds.innerHTML = 59 ;
        if(minutes.innerHTML==0){
            minutes.innerHTML = 59 ;
            if(hours.innerHTML==0){
                hours.innerHTML = 23 ;
                if(days.innerHTML!=0){
                    days.innerHTML -=1 ; 
                    if(days.innerHTML<10){
                        days.innerHTML = `0${days.innerHTML}`
                    }
                }else{
                    window.clearInterval(handler)
                }
            }else{
                hours.innerHTML -=1 ; 
                if(hours.innerHTML<10){
                    hours.innerHTML = `0${hours.innerHTML}`
                }
            }
        }else{
            minutes.innerHTML -=1 ; 
            if(minutes.innerHTML<10){
                minutes.innerHTML = `0${minutes.innerHTML}`
            }
        }
    }else{
        seconds.innerHTML -=1 ; 
        if(seconds.innerHTML<10){
            seconds.innerHTML = `0${seconds.innerHTML}`
        }
    }
}
let handler = window.setInterval(count,1000)