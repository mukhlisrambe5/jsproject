let testimonials= [
    { pp: "people1.jpg",
    name: "Pieter",
    message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
    },
    { pp: "people2.jpg",
    name: "Ruby",
    message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    { pp: "people3.jpg",
    name: "Daniel",
    message: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    { pp: "people4.jpg",
    name: "Amanda",
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    { pp: "people5.jpg",
    name: "Kiky",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
    },
    { pp: "people6.jpg",
    name: "Jason",
    message: "CSS z-index property set a overlap value and base on overlap value to element positioning set from each other"
    },
];

(function(){
    var image= document.querySelector(".pict");
    var name=  document.querySelector(".name");
    var message=  document.querySelector(".message");

    var buttons= document.querySelectorAll(".button");
    let num=0;
    buttons.forEach(function(button){
        button.addEventListener("mouseover", function(){
            button.style.backgroundColor= "blue";
        });

        button.addEventListener("mouseout", function(){
            button.style.backgroundColor= "transparent";
        } );
        
        button.addEventListener("click", function(){
            if (button.classList.contains("next")){
                num++;
            }else if(button.classList.contains("prev")){
                num--
            }
            num ==-1? num= testimonials.length : num == testimonials.length ? num=0 : num=num;

            image.style.backgroundImage= "url("+ testimonials[num].pp +")";
            name.innerHTML= testimonials[num].name; 
            message.innerHTML = testimonials[num].message;
        })
    })
})()