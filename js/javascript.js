console.log("js connectin working");


let container = document.querySelector("#container");

function makeDivs(numDivs) {
  for (let d = 0; d < numDivs; d++) {
    let cells = document.createElement('div');
    cells.setAttribute("class", "gclass");
    container.appendChild(cells);
  }
}

makeDivs(256);





let hoverItem = document.querySelector(".gclass");

hoverItem.addEventListener("mouseover", func, false);
hoverItem.addEventListener("mouseout", func1, false);

function func()
{ 
  hoverItem.setAttribute("style", "background-color:blue;")
}

function func1()
{  
  hoverItem.setAttribute("style", "background-color:green;")
}


document.body.addEventListener('mouseover', function (evt) {
  if (evt.target.className === 'gclass') {
      evt.target.setAttribute("style", "background-color:blue;");
  }
}, false);

document.body.addEventListener('mouseout', function (evt) {
  if (evt.target.className === 'gclass') {
      evt.target.setAttribute("style", "background-color:red;");
  }
}, false);