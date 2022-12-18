// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submitButton = document.querySelector('input[type="submit"]');


submitButton?.addEventListener('click', (e) => {
    makeGrid();
})


function makeGrid() {
    var height = document.querySelector("#inputHeight").value;
    var width = document.querySelector("#inputWidth").value;
    
    var table = document.querySelector("#pixelCanvas");
    

    for (row = 0; row < height; row++) {
        var tabRow = document.createElement("TR");
        tabRow.setAttribute("id", row);
        table.appendChild(tabRow);
        for (cell = 0; cell < width; cell++) {
            var tabCell = document.createElement("TD");
            tabCell.setAttribute("id", row + cell);
            tabRow.appendChild(tabCell);
        }
        
    }
}

