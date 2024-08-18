const container = document.querySelector("#container");



const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";


const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";


const pinkBox = document.createElement("div");
pinkBox.classList.add("pinkBox");
pinkBox.style.border = "1px solid black";
pinkBox.style.backgroundColor = "pink";

const pinkBoxH1 = document.createElement("h1");
pinkBoxH1.textContent = "I'm in a div";

const pinkBoxP = document.createElement("p");
pinkBoxP.textContent = "ME TOO!";

pinkBox.appendChild(pinkBoxH1);
pinkBox.appendChild(pinkBoxP);



container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(h3);
container.appendChild(pinkBox);

// const btn1 = document.querySelector("#btn1");
// btn1.onclick = () => alert("Hello World 1");


// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", () => {
//   alert("Hello World 2");
// });


// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }

//   const btn1 = document.querySelector("#btn1");
//   btn1.onclick = alertFunction;

//   const btn2 = document.querySelector("#btn2");
//   btn2.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
//   })


const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
