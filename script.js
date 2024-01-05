var target;
function create(){
var score = document.createElement("SPAN");
score.className ="score";
score.style.display="inline-flex";
score.style.margin ="15%";
var totalqns = document.createElement("SPAN");
totalqns.className ="totalqns";
totalqns.style.margin ="15%";
    var img = document.createElement("IMG");
img.setAttribute("src","https://1.bp.blogspot.com/-gH5M_f45XzU/YOp7eipu69I/AAAAAAAAC1E/DHhDbhmuAIY3ndSk00CpSPpJF9xWQcZVgCLcBGAsYHQ/s240/iconmonstr-arrow-69-240%2B%25282%2529.png");
img.className = "tonext";
img.setAttribute("height","40");
img.setAttribute("width","40");
img.style.display ="inline-flex";
    var scorecard = document.createElement("DIV");
    scorecard.className = "scorecard"; scorecard.style.backgroundColor="#404040";
 scorecard.style.color="white";
 scorecard.style.fontSize="14px";
 scorecard.style.height="40px";
 scorecard.style.width="50%";
 scorecard.style.left = "50%";
 scorecard.style.transform ="translateX(-50%)";
 scorecard.style.borderRadius="20px";
     scorecard.style.position ="fixed";
scorecard.style.bottom ="30px";
scorecard.style.alignItems="center";
scorecard.style.justifyContent="center";
scorecard.style
scorecard.style.display ="none";
scorecard.appendChild(score);
scorecard.appendChild(img);
scorecard.appendChild(totalqns);
var lastelm = document.getElementById("quiz");
lastelm.insertBefore(scorecard,lastelm.childNodes[0]);}

function display(){
var elements = document.querySelectorAll("input[type=radio]");
var divs = document.querySelectorAll(".qcontainer");
for (i=0;i<elements.length;i++){elements[i].onclick=function(){document.getElementsByClassName("scorecard")[0].style.display ="flex";document.getElementsByClassName("tonext")[0].style.pointerEvents ="auto";document.getElementsByClassName("tonext")[0].style.opacity ="1.0";target=this;var parentx = this.parentElement.parentElement;
var childz = parentx.querySelectorAll("input[type=radio]");
for (i=0;i<childz.length;i++){childz[i].disabled=true;};}}}
window.onscroll = function(){document.getElementsByClassName("tonext")[0].style.pointerEvents ="none";document.getElementsByClassName("tonext")[0].style.opacity ="0.7";}
function setf(){
document.getElementsByClassName("tonext")[0].onclick = function (){var step=target.parentElement.parentElement .offsetHeight;window.scrollBy(0,step+40);stopf();}
}
function submit(){
var x = 0;
var qs = document.getElementsByClassName("question").length;
var elements = document.querySelectorAll("input[type=radio]");
var correct = document.getElementsByClassName("correct");
var option2 = document.querySelectorAll(".wrong+.option");
var option1 = document.querySelectorAll(".correct + .option");
var checked = document.querySelectorAll(" input[type=radio]:checked.wrong");
for (k=0;k<correct.length;k++) {if (correct[k].checked===false){continue;}option1[k].style.backgroundColor ="darkgreen";option1[k].style.color ="white"; x+=1;}
for (i=0;i<checked.length;i++) {checked[i].nextSibling.style.backgroundColor ="darkred";checked[i].nextSibling.style.color ="white";var parent1 = checked[i].parentElement;var parent2 = parent1.parentElement; var selected = parent2.querySelector(".correct");selected.nextSibling.style.backgroundColor ="darkgreen";selected.nextSibling.style.color="white";}
document.getElementsByClassName("score")[0].innerHTML = x;
document.getElementsByClassName("totalqns")[0].innerHTML =qs;
}
function stopf(){
    var div = document.querySelectorAll(".qcontainer");
    var divlength = div.length;
    var divChild = div[divlength-1].querySelectorAll("input[type=radio]");
    for (i=0;i<divChild.length;i++){if(divChild[i].checked===true){document.getElementsByClassName("scorecard")[0].style.display = "none";};}}
window.onload = function(){
        var elements = document.querySelectorAll("input[type=radio]");
        for (i=0;i<elements.length;i++){elements[i].addEventListener("change",submit);};
        create();display();setf();}