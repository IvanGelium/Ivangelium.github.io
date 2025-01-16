let x;
let y;

function fun () {
    for (let i = 100; i >= 0; i--) {
        x = Math.random();
        y = i;
        if (0.4242424244 >= x && x >= 0.4242424240){
            console.log (x);
            console.log (y);
        }
    } 

    return ("no luck");
    
}

//0.4242424242424242
const PI = 3.14159265359;

//first line 
const container = document.querySelector("#con");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Wow, am i HTML GENERATOR???";

//second line 
const red = document.createElement("p");
red.classList.add("red");
red.textContent = "Hiya, i'm red!";
red.style.color = "red";

//third line 
const blue = document.createElement("h3");
blue.classList.add("blue");
blue.textContent = "I'm blue h3!";
blue.style.color = "blue";

//bordiv 
const body = document.querySelector("body");
const bordiv = document.createElement("div");
body.appendChild(bordiv);
bordiv.classList.add("bordiv");
bordiv.setAttribute("style","background: pink;");
bordiv.style.border = "thick solid black";

//child of bordiv: div
const selectBordiv = document.querySelector(".bordiv");
const div = document.createElement("h1");
div.classList.add("imdiv");
div.textContent = "I'm fucking liar, you are not div";

//chilr of bordiv: piska
const piska = document.createElement("p");
piska.textContent = "fucking hell, this is fucked";


container.appendChild(content);
container.appendChild(red);
container.appendChild(blue);
selectBordiv.appendChild(div);
selectBordiv.appendChild(piska);

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
