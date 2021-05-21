var buttonStyle= document.querySelector("#button").style;
var colorText= document.querySelector("#color");
var color= ['red', 'yellow', 'blue', 'green', 'aqua', 'silver', 'brown', 'violet', 'biege', 'orange' ];

function changeButtonColor(){
    buttonStyle.backgroundColor ='orange';
    buttonStyle.color='white';
    buttonStyle.border= '0px';
}

function changeBack(){
    buttonStyle.backgroundColor ='transparent';
    buttonStyle.color='black';
    buttonStyle.border= 'solid 1px black';
}

function changeBgColor(){
    var result= color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor =result;
    colorText.innerHTML = "Color: " +result;
}