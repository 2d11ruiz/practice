const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the text-content!";

// A <p> with red text that says “Hey I’m red!”
const redPar = document.createElement("p");
redPar.textContent = "Hey I'm red!";
redPar.style.color = "red";

// An <h3> with blue text that says “I’m a blue h3!”
const blueHead = document.createElement("h3");
blueHead.textContent = "I'm a blue h3!";
blueHead.style.color = "blue";


// A <div> with a black border and pink background color 
// with the following elements inside of it:
//     Another <h1> that says “I’m in a div”
//     A <p> that says “ME TOO!”

const pinkDiv = document.createElement("div");
pinkDiv.style.cssText = "border: 1px solid black; background-color: pink;";

const subHead = document.createElement("h1");
subHead.textContent = "I'm in a div";
pinkDiv.appendChild(subHead);

const subPar = document.createElement("p");
subPar.textContent = "ME TOO!";
pinkDiv.appendChild(subPar);

container.appendChild(content);
container.appendChild(redPar);
container.appendChild(blueHead);
container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", alertFunction);

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (e) {
  console.log(e);
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function (e) {
  console.log(e.target);
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})