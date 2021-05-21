(function(){
    var countms=0;
    countsec=0;
    countminute=0;
    var timer= document.querySelector("#timer");
    var buttons= document.querySelectorAll(".btn");
    var result;
    buttons.forEach(function(btn){
        btn.addEventListener("mouseover", function(){
            btn.style.backgroundColor="silver";
        });
        btn.addEventListener("mouseout", function(){
            btn.style.backgroundColor="orange";
        });

        btn.addEventListener("click", function(){
        
           if(btn.classList.contains('start')){
            function update(){     
                countms +=1;
                if(countms==100){
                    countsec +=1;
                    countms =0;
                }if(countsec==60){
                    countminute +=1;
                    countsec=0;
                }

                var x= countminute <=9 ? '0'+ countminute : countminute;
                var y= countsec <=9? '0'+countsec: countsec;
                var z= countms <=9? '0' +countms: countms;

                timer.innerHTML= x +":"+ y +":"+ z;
            }    
            result= setInterval(update, 10);
           }
           if(btn.classList.contains('stop')){
                function stop(){
                    clearInterval(result);
                }
                stop();
            }
            if(btn.classList.contains('reset')){
                function reset(){
                    clearInterval(result);
                    countms=0;
                    countsec=0;
                    countminute=0;
                    timer.innerHTML= "0"+countminute +":"+ "0"+countsec +":"+ "0"+countms;
                }
                reset();
            }   
           
        });
    });
            
    })();
    
   