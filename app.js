let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let turnO = true; //if true then O turn otherwise X turn.
let newgame = document.querySelector("#New_btn");
let newgae = document.querySelector("#new_btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawcontainer = document.querySelector(".draw");
let drwamsg = document.querySelector("#drwa")
let cnt=0;

const winpatters=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    drawcontainer.classList.add("hidden")
    cnt = 0;
}

const disabeboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const gamedraw=()=>{
    drawcontainer.classList.remove("hidden");
    disabeboxes();
}

const showinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabeboxes();
}



const checkwinner=()=>{
    for(let pattern of winpatters){
        let pos0val= boxes[pattern[0]].innerText;
        let pos1val= boxes[pattern[1]].innerText;
        let pos2val= boxes[pattern[2]].innerText;
        if(pos0val!= "" && pos1val != "" &&pos2val!=""){
            if(pos0val===pos1val && pos1val===pos2val){
                console.log("winnner", pos0val);
                showinner(pos0val);
            }
            else if(cnt===9 &&(pos0val!=pos1val || pos1val!=pos2val)){
                gamedraw();
            }
        }
    }
    }

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        cnt++;
        console.log(cnt);
        if(turnO){
            box.classList.remove("colr");
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.classList.add("colr");
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});



newgame.addEventListener("click", resetgame);
newgae.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
