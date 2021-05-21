const bill= document.querySelector("#bill");
const person= document.querySelector("#person");
const service= document.querySelector(".service");
const calc= document.querySelector(".calc");
const result= document.querySelector(".result");



(function(){
    calc.addEventListener('click', ()=>{
        result.innerHTML= bill.value =="" || person.value =="" || service.value==""? "Must fill all the field!" : (bill.value *(1 + parseFloat(service.value)))/person.value;

    })
})()