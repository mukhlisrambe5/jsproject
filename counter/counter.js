function changeColor(){
    var button= document.querySelector("#lowerCount");
    button.style.backgroundColor= 'cyan';
}
function reverseColor(){
    var button= document.querySelector("#lowerCount");
    button.style.backgroundColor= 'blue';
}

function changeColor2(){
    var button= document.querySelector("#addCount");
    button.style.backgroundColor= 'cyan';
}
function reverseColor2(){
    var button= document.querySelector("#addCount");
    button.style.backgroundColor= 'blue';
}
// function changeColor(){
//     var button= document.querySelector("#lowerCount");
//     button.style.backgroundColor= 'cyan';
// }
// function reverseColor(){
//     var button= document.querySelector("#lowerCount");
//     button.style.backgroundColor= 'blue';
// }

// function changeColor2(){
//     var button= document.querySelector("#addCount");
//     button.style.backgroundColor= 'cyan';
// }
// function reverseColor2(){
//     var button= document.querySelector("#addCount");
//     button.style.backgroundColor= 'blue';
// }

// function add(){
//     var x= document.querySelector("#num");
//     y= parseInt(x.textContent);
//     y++
//     if(y<0){
//         x.style.color='red';
//     }else if(y==0){
//         x.style.color='black';
//     }else{
//         x.style.color='green';
//     }
//     document.querySelector("#num").innerHTML= y; 
// }
// function decrease(){
//     var x= document.querySelector("#num");
//     y= parseInt(x.textContent);
//     y--
//     document.querySelector("#num").innerHTML= y;
//     if(y<0){
//         x.style.color='red';
//     }else if(y==0){
//         x.style.color='black';
//     }else{
//         x.style.color='green';
//     }
// }

(function(){
    var buttons= document.querySelectorAll(".button");
    let count=0;

    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            if(button.classList.contains('prev')){
                count--
            }else if(button.classList.contains('next')){
                count++
            }
            const counter= document.querySelector("#num");
            counter.textContent= count;

            count<0 ? counter.style.color='red' : count>0 ? counter.style.color='green' : counter.style.color='black'; 
        })
    })
})()