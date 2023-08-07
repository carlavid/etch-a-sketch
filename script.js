function createGrid(rows) {
    const container = document.getElementById("grid-container");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.background = "white";
            container.appendChild(div);   
        }
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;  
    
}}

function colorGrid(color) {
    const divSquares = document.getElementsByClassName("square");
    
    for (let i = 0; i < divSquares.length; i++) {
    divSquares[i].addEventListener("mouseover", mouseoverHandler);
    }

    function mouseoverHandler() {
        this.classList.add("hovered");
        color = document.getElementById("customColor").value;
        this.style.backgroundColor = color;
    }

}

// default 
createGrid(10);
colorGrid();


// customize with range slider
let range = document.querySelector("#rangeInput");
let container = document.getElementById("grid-container");

range.addEventListener("input", function() {
   container.innerHTML = "";
   createGrid(this.value);
   colorGrid();
})

// reset  
let button = document.querySelector(".button");

button.addEventListener("click", function() {
    container.innerHTML = "";
    createGrid(10);
    colorGrid();
})