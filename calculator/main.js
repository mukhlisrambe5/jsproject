var number= document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){
        // var output= reverseNumberFormat(getOutput());
        var output= getOutput();
        // if(output !=NaN){
            output= output+this.id;
            printOutput(output);
        // }
    });
}

function getOutput(){
    return document.querySelector("#output-value").innerHTML;
}

function printOutput(num){
    // if(num==""){
    //     document.querySelector("#output-value").innerHTML=num;
    // }else{
    //     document.querySelector("#output-value").innerHTML= getFormattedNumber(num);
    // }
    document.querySelector("#output-value").innerHTML=num;
}