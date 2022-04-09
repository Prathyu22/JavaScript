function paraClicked() {
    document.getElementById("para").setAttribute("style","color:blue");
}

function paraMouseOver() {
    document.getElementById("para").setAttribute("style","color:red");
}

document.getElementById("para").addEventListener("click",paraClicked);
document.getElementById("para").addEventListener("mouseover",paraMouseOver);

function buttonClick() {
    document.getElementById("b").setAttribute("style","color:blue");
}