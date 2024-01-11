let target;
let x = 0;
function create(){
    const score = document.createElement("SPAN");
    score.className ="score";
    const totalqns = document.createElement("SPAN");
    totalqns.className ="totalqns";
    const img = document.createElement("IMG");
    img.setAttribute("src","assets/nextbttn.png");
    img.className = "tonext";
    const scorecard = document.createElement("DIV");
    scorecard.className = "scorecard";
    scorecard.appendChild(score);
    scorecard.appendChild(img);
    scorecard.appendChild(totalqns);
    const quizElem = document.getElementById("quiz");
    quizElem.insertBefore(scorecard, quizElem.childNodes[0]);
}
function display(){
    const elements = document.querySelectorAll("input[type=radio]");
    for (i=0;i<elements.length;i++){
        elements[i].onclick=function(){
            document.getElementsByClassName("scorecard")[0].style.display ="flex";
            document.getElementsByClassName("tonext")[0].style.pointerEvents ="auto";
            document.getElementsByClassName("tonext")[0].style.opacity ="1.0";
            target=this;
            const parentx = this.parentElement.parentElement;
            const childz = parentx.querySelectorAll("input[type=radio]");
            for (i=0;i<childz.length;i++){
                childz[i].disabled=true;
            };
        }
    }
}
window.onscroll = function(){
    document.getElementsByClassName("tonext")[0].style.pointerEvents ="none";
    document.getElementsByClassName("tonext")[0].style.opacity ="0.5";
}
function setf(){
    document.getElementsByClassName("tonext")[0].onclick = function (){
        const step=target.parentElement.parentElement.offsetHeight;
        // step + question container's style.marginBottom
        window.scrollBy(0, step + 40);
        stopf();
    }
}
function submit(e){
    const qs = document.getElementsByClassName("question").length;
    const radio = e.target;
    if (radio.className === 'correct'){
        const option1 = radio.parentElement.parentElement.querySelector(".correct + .option");
        option1.style.backgroundColor ="darkgreen";
        option1.style.color ="white";
        x++;
    }else {
        radio.nextSibling.style.backgroundColor ="darkred";
        radio.nextSibling.style.color ="white";
        const selected = radio.parentElement.parentElement.querySelector(".correct");
        selected.nextSibling.style.backgroundColor ="darkgreen";
        selected.nextSibling.style.color="white";
    }
    document.getElementsByClassName("score")[0].innerText = x;
    document.getElementsByClassName("totalqns")[0].innerText =qs;
}
function stopf(){
    const div = document.querySelectorAll(".qcontainer");
    const divlength = div.length;
    const divChild = div[divlength-1].querySelectorAll("input[type=radio]");
    for (i=0;i<divChild.length;i++){
        if(divChild[i].checked===true){
            document.getElementsByClassName("tonext")[0].style.pointerEvents ="none";
            document.getElementsByClassName("tonext")[0].style.opacity ="0.5";
        };
    }
}
window.onload = function(){
    const elements = document.querySelectorAll("input[type=radio]");
    for (i=0;i<elements.length;i++){
        elements[i].addEventListener("change", submit);
    };
    create();
    display();
    setf();
}