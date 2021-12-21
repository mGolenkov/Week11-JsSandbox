const myButton = document.querySelector('button');
const myImg = document.querySelector('img');
const img = ["1.jpg", "2.jpg", "3.jpg"];
 
 
myButton.addEventListener('click', changeImage);
 
function changeImage() {
   
    let randomIndex = Math.floor(Math.random() * img.length);
   
    myImg.src = "img/" + [randomIndex + 1] + ".jpg";
   
    console.log(randomIndex);
}