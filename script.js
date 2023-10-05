function createCanvas(number) {
  const boxcontainer = document.querySelector("#boxcontainer");

    for (let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        boxcontainer.appendChild(row);

          for (let i = 0; i < number; i++) {
            const gridbox = document.createElement("div");
              gridbox.setAttribute("class", "gridbox");    
              row.appendChild(gridbox);
              
              gridbox.addEventListener("mouseover", color = () => {
                let rainbowcolor = Math.floor(Math.random()*16777215).toString(16);
                gridbox.style.backgroundColor = "#" + rainbowcolor;
                gridbox.style.borderColor = "#" + rainbowcolor;
              })
          }    
    }
}

const newCanvasBtn = document.querySelector("#newcanvas");
newCanvasBtn.addEventListener("click", newCanvas = () => {
  const row = document.querySelector(".row");
  let number = row.childElementCount;

  let canvasSize= prompt("How many rows and columns would you like in your new canvas?", "16");
  let answerType = isNaN(canvasSize);

  console.log(answerType);
  console.log(canvasSize);

  if (answerType == false) {
    if (canvasSize > 100) {
      alert("Please input a number lower than 100 to prevent crashes.")
    } else {
      createCanvas(canvasSize);
      for (let i = 0; i < number; i++) {
        for (let i = 0; i < number; i++) {
          const gridbox = document.querySelector(".gridbox");
          gridbox.remove();
        }
        const row = document.querySelector(".row");
        row.remove();
      }
    }
  } else if (answerType == true) {
      alert("Please input a number.\nExample: 16");
  }
})

createCanvas(16);