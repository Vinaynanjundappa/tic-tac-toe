let boxes= document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let newgamebtn = document.querySelector("#new-btn");
let message = document.querySelector("#msg");

let clickCount = 0;
let turnO= true; // playerX, PlayerO
 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  

];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    

        if (turnO) {
            // Player O
            box.innerText = "O";
            box.style.color = "green";  // Correctly apply the color style
            turnO = false;
        } else {
            // Player X
            box.innerText = "X";
            box.style.color = "black";  // Correctly apply the color style
            turnO = true;
        }
box.disabled = true; 
clickCount++;
let isWinner = checkWinner();

if (clickCount === 9 && !isWinner) {
  gameDraw();
}
});
});

const gameDraw = () => {
msg.innerText = `Game was a Draw.`;
msgcontainer.classList.remove("hide");
disabledbutton();
};

const disabledbutton= () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enabledbutton= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const showwinner = (winner) => {
    msg.innerText = `Congratulation, WINNER is ${winner}`;
    msgcontainer.classList.remove("hide");
    
   
}

const checkWinner = () => {
    for( let pattern of winPatterns) {
           
           let pos1Val = boxes[pattern[0]].innerText;
           let pos2Val= boxes[pattern[1]].innerText;
           let pos3Val= boxes[pattern[2]].innerText;

           if(pos1Val !="" && pos2Val !="" && pos3Val != "")
           {
            if (pos1Val === pos2Val && pos2Val==pos3Val)
            {
                
                // boxes.forEach(box => box.disabled = true); (or)
                disabledbutton();
                showwinner(pos1Val);


                
            }
           }
        }
}

const resetgame= () =>  {
turnO= true;
clickCount= 0;
enabledbutton();
msgcontainer.classList.add("hide");
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


