const addButton= document.querySelector('.addButton');
var input= document.querySelector('.input');
const container= document.querySelector('.container');

class item{
	constructor(itemName){
		this.createDiv(itemName);
	}

	createDiv(itemName){
		let item= document.createElement('div');
		item.classList.add('item');

		let input= document.createElement('input');
		input.value= itemName;
		input.disabled= true;
		input.classList.add('item_input');
		input.type= "text";

		let editButton= document.createElement('button');
		editButton.classList.add('editButton');
		editButton.innerHTML= "EDIT";

		let removeButton= document.createElement('button');
		removeButton.classList.add('removeButton');
		removeButton.innerHTML="REMOVE";

		container.appendChild(item);
		item.appendChild(input);
		item.appendChild(editButton);
		item.appendChild(removeButton);

		editButton.addEventListener('click', ()=> this.edit(input));
		removeButton.addEventListener('click', ()=> this.remove(item));
	}

	edit(input){
		input.disabled= false;
	}
	remove(item){
		container.removeChild(item);
	}
}

function check(){
	if(input.value != ""){
		new item(input.value);
		input.value="";
	}
}

addButton.addEventListener('click', check);

window.addEventListener('keydown', (e)=>{
	if(e.which==13){
		check();
	}
})
// new item('Sport');