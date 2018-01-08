//define a function
function sayDontPoke() {
	alert('dont poke the image');
}

// refer to a function
document.querySelector('img').onclick = sayDontPoke

// call a function
// sayDontPoke()
