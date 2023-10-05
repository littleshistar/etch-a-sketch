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

createCanvas(16);