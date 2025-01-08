 const buttonValues = [
    "AC","+/-","%","÷",
    "7","8","9","x",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","="
 ]

 const rightSymbols = ["÷","x","-","+","="]
 const topSymbol = ["AC","+/-","%"]

 const display = document.getElementById("display");

 let A = 0
 let operator = null
 let B = null

 for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
    if (value == "0") {
        button.style.width = "200px"
        button.style.gridColumn = "span 2"
    }

    if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9500";
    }

    else if (topSymbol.includes(value)) {
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    button.addEventListener('click', function() {
        if (rightSymbols.includes(value)) {

        }

        else if (topSymbol.includes(value)) {

        }

        else {
            if (value == ".") {

            }
            else {
                display.value += value;
            }
        }
    });

    document.getElementById("buttons").appendChild(button);
 }