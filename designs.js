// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submitButton = document.querySelector('input[type="submit"]');
const table = document.querySelector("#pixelCanvas");
let color = document.getElementById("colorPicker").value;


document.getElementById("colorPicker").addEventListener('change', (e) => {
    color = e.target.value;
});

submitButton?.addEventListener('click', (e) => {
    e.preventDefault();
    makeGrid();
})


function makeGrid() {
    var height = document.querySelector("#inputHeight").value;
    var width = document.querySelector("#inputWidth").value;

    for (var row = 0; row < height; row++) {
        var tabRow = document.createElement("TR");
        tabRow.setAttribute("id", row);
        table.appendChild(tabRow);
        for (var cell = 0; cell < width; cell++) {
            var tabCell = document.createElement("TD");
            tabCell.setAttribute("id", String(row) + String(cell));
            tabRow.appendChild(tabCell);
        }
    }
    return table;
}

const onClick = (event) => {
    event.srcElement.style.backgroundColor = color;
}
table.addEventListener('click', onClick);


