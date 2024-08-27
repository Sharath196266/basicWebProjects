let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-button");
let newbtn=document.querySelector("#new-button");
let msgCon=document.querySelector(".msgcon");
let m=document.querySelector("#msg");
let h=document.querySelector(".hid");
let turno = true;//player o / x
let count = 0; //to track Draw

const arr=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ];

const resetG = () => {
        turno = true;
        count = 0;
        enableboxes();
        msgCon.classList.add("hide");
        h.classList.remove("hid");
};

boxes.forEach((box) => {
    h.classList.remove("hid");
    box.addEventListener("click",()=> {
        console.log("box was clicked");
        if(turno)
        {
            box.innerText="O";
            turno=false;
        }
        else{
        
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkwinner();
        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    m.innerText="Game is Draw.";
    msgCon.classList.remove("hide");
    h.classList.add("hid");
    disableboxes();
};
const disableboxes=() =>{
    for(let box of boxes){
        box.desabled = true;
    }
};
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner=(w)=>{
    m.innerText= 'Congratulations, Winner is '+w;
    msgCon.classList.remove("hide");
    h.classList.add("hid");
    disableboxes();
};

const checkwinner = () =>{
    for(let pattern of arr){
       let p1 = boxes[pattern[0]].innerText;
       let p2 = boxes[pattern[1]].innerText;
       let p3 = boxes[pattern[2]].innerText;
            
       if(p1 != "" && p2 != "" && p3 != "")
        {
            if(p1 === p2 && p2===p3)
            {
            console.log("Winner",p1);
            showWinner(p1);
            return true;
            }
        }
    }
};

newbtn.addEventListener("click", resetG);
resetBtn.addEventListener("click", resetG);