const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ["red", "green", "blue", "yellow"];
 
 
myButton.addEventListener('click', changeColor);
 
function changeColor() {
    let randomIndex = Math.floor(Math.random() * colors.length); //võtab random sõne massiivist colors 0st kuni 3ni
    console.log(randomIndex);
    myBox.style.backgroundColor = colors[randomIndex];
}
