// Targetting the button  which we want to click

document.querySelector(".btn").addEventListener("click", colorChange)

// Defining the function which consists the logic of changing color and size

function colorChange(){
    
let box = document.querySelector(".box")

box.style.backgroundColor = "yellow";
box.style.width = "600px";
box.style.height = "600px";
}