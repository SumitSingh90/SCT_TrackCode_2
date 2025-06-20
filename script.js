let input = document.querySelector(".input");
let result = 0;
let b = "(";
document.querySelector(".buttons").addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("but")) {
        let box = event.target.innerText;
        if (box == "+" || box == "-" || box == "x" || box == "/") {
            input.value+=box;
        }
        else if (box == "Delete") {
            input.value = input.value.slice(0, -1);
        }
        else if (box == "C") {
            input.value = "";
        }
        else if (box == "()") {
            if (b == "(") {
                input.value += b;
                b = ")"
            }
            else {
                input.value += b;
                b = "(";
            }
        }
        else if (box == "=") {
            let i = input.value.replace(/x/g,"*");
            input.value = eval(i);
        }
        else if(box=="%"){
            input.value+="00";
        }
        else {
            input.value += box;
        }

    }
})

