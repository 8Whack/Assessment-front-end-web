console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form submitted!');
}

let form = document.querySelector('form#contact');


form.addEventListener('submit', handleSubmit);

function compliCat(event){
	alert("You are as elegant as this cat")
}

document.querySelector('#butterCat').addEventListener('mouseover', compliCat)