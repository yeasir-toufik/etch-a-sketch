console.log("js connectin working")


let container = document.querySelector("#container");

function makeDivs(numDivs) {
  for (let d = 0; d < numDivs; d++) {
    let cells = document.createElement('div');
    container.appendChild(cells)
  }
}

makeDivs(256);
