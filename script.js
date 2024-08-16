function changelogo() {
    let logo = document.getElementById("logo");
    logo.setAttribute("src", "./porsh.jpeg"); 
}

function reset() {
    let logo = document.getElementById("logo");
    logo.setAttribute("src", "./lambo.png"); 
}



let heading= document.getElementById("head")
heading.innerText ="you have been acked";




heading.style.color="rgb(89,161,201)";

let para = document.getElementsByClassName("text");
para[0].style.border="3px solid blue";
para[1].setAttribute("hidden", true)

para[1].removeAttribute("hidden", true)

let a=document.querySelector("#head")
a.innerText="hello world"


let b = document.querySelector("div p")
b.style.color="red";