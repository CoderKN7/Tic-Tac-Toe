let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector('#newGame');
let messageContainer = document.querySelector('.msg-container');
let message = document.querySelector('#msg');

let turnO = true //turnX , turnO
let count = 0 ;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7 ,8]
];
const resetGame = () => {
    turnO = true ;
    enableBtns();
    messageContainer.classList.add("hide");

}
boxes.forEach((box) =>{
    box.addEventListener( "click" , () => {
        console.log("clicked box");
        if(turnO){
            //playerO
            box.innerText = "O";
            turnO = false;
        }else{
            //PlayerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        count++ ;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            drawGame();
        }
    });
});
const disableBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const drawGame = () =>{
    message.innerText = `Game Draw!! Start Again!!` ;
    messageContainer.classList.remove("hide");
}

const showWinner = (winner) => {
    message.innerText = `Congratulations !! Player ${winner} wins` ;
    messageContainer.classList.remove("hide");
    disableBtns();
}
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner");
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);