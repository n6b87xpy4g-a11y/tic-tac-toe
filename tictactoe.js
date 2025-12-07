let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msg = document.querySelector("#msg");
let win = document.querySelector("#winnner-container");

let turnO = true;
let count = 0;
const winpatterns =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] 
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        count++;
        console.log(count);
        checkwinner();
    });
});
const printwinner = (winner) =>{
    msg.innerText = `winner is ${winner}`;
    win.classList.remove("hide");
}

const checkwinner = () => {
    for(let patterns of winpatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                disabledboxes();
                printwinner(pos1val);
            }
        }
    }
}

const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true; 
    }
}
const enabledboxes = () =>{
    for(let box of boxes){
        box.disabled = false; 
        box.innerText = "";
    }
}
const resetgame = () =>{
    turnO = true;
    count = 0;
    enabledboxes();
    win.classList.add("hide");
}

resetbtn.addEventListener("click", () =>{resetgame();});
newgamebtn.addEventListener("click", () =>{resetgame();});