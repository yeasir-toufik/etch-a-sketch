
function createGrid(n) {
  
  for (let i = 0; i < n; i++) {
      let container = document.querySelector(".container");
      let row = document.createElement("div");
      row.style.display = "flex";
      row.style.flex = "1";
      container.appendChild(row);

      for (let j = 0; j < n; j++) {
          let cell = document.createElement("div");
          cell.style.border = "1px solid black";
          cell.style.flex = "1";
          row.appendChild(cell);

          
          cell.style.flex = "1";
          cell.addEventListener("mouseover", function() {
              if (cell.style.backgroundColor == "") {
                  
                  cell.style.backgroundColor = "red";
              }
              
              else {
                cell.style.backgroundColor = "green";
              }
          })
          
      }
  }
}

createGrid(16);

let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  let input;
  while (isNaN(input) || input > 100) {
      input = prompt("Please enter the grid dimensions size you want(Max 100)")
  }
  let container = document.querySelector(".container");
  container.replaceChildren();
  createGrid(input);
})