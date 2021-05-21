
(function(){
    var buttons= document.querySelectorAll(".button");
    var input= document.querySelector(".result");

    buttons.forEach(function(button){

        button.addEventListener("click", function(){
            if(button.classList.contains("reset") ){
                input.value = "";
            }
            if(button.classList.contains("number") || button.classList.contains("operator")  ){
                input.value += button.value;
            }
            if(button.classList.contains("compute") ){
                input.value = eval(input.value);
            }
        })
    });
})()
