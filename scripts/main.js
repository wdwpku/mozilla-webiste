// Define a Function
 function sayOuch() {
    alert('Ouch! Stop poking me!');
}

//Use a CSS selector to identify an element
var foxImage = document.query.querySelector('img');

//Assign the function to the onclick event on that e
foxImage.onclick = sayOuch;
