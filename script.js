function createGrid(rows) {
    const container = document.getElementById("grid-container");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.style.width = "30px";
            div.style.height = "30px";
            div.style.background = "white";
            container.appendChild(div);   
        }
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;  
    
}}
createGrid(16);



window.onload = function() {
    const divSquares = document.getElementsByClassName("square");
    
    for (let i = 0; i < divSquares.length; i++) {
        divSquares[i].addEventListener("mouseover", mouseoverHandler);
    }

    function mouseoverHandler() {
        this.classList.add("hovered");

        let colors = ["#00BFFF", "#4B9CD3", "#B2FFFF", "#00CED1", "#0CAFFF", "#B9D9EB"];
        this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }

}
