// (function(){
//     var buttons= document.querySelectorAll(".button");
//     var image= document.querySelector(".container");
    
//     let num=0;
//     buttons.forEach(function(button){
//         button.addEventListener("mouseover", function(){
//             button.style.backgroundColor= 'cyan';
//         })
//         button.addEventListener("mouseout", function(){
//             button.style.backgroundColor='blue';
//         })

//         button.addEventListener("click", function(){
//             var pict= ["pict1.jpg",
//             "pict2.png",
//             "pict3.jpg",
//             "pict4.jpg",
//             "pict5.jpg",
//             "pict6.jpeg",
//             "pict7.jpg"];
//             if(button.classList.contains('next')){
//                 num++;
//             }else if(button.classList.contains('prev')){
//                 num--
//             }
//             if (num ==-1){
//                 num=6;
//             }else if(num==7){
//                 num=0;
//             }
//             image.style.backgroundImage ="url("+ pict[num] +")";
//         })
//     })
// })()

(function(){
    var image= document.querySelector(".container");
    var pict= ["pict1.jpg",
            "pict2.png",
            "pict3.jpg",
            "pict4.jpg",
            "pict5.jpg",
            "pict6.jpeg",
            "pict7.jpg"];
    let num=0;
    setInterval(function(){
        num++;
        num==7? num=0 : num==-1? num=6 :num=num;
        image.style.backgroundImage ="url("+ pict[num] +")";
    },2000);
})()