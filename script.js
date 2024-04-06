// Initial 16x16 board created
const cdiv = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.setAttribute("id", `theBox${i}`);
  cdiv.appendChild(div);
}

// Mousehover box coloring 
const boxes = document.querySelectorAll("div.container > div");

boxes.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  });
});

// Removes current board - used inside createBoard()
function removeBoard(){
  while (cdiv.hasChildNodes()) {
    cdiv.removeChild(cdiv.firstChild);
  }
};
// Creates new board with userNumb ** 2 amount of divs 
function createBoard(userNumb){
  removeBoard();
  let userNumbSqr = userNumb ** 2
  for (let i = 1; i < userNumbSqr; i++) {
    const div = document.createElement('div');
    div.setAttribute("id", `theBox${i}`);
    cdiv.appendChild(div);
  }
};

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let userNumb = parseInt(prompt("Enter a number"));
  createBoard(userNumb);
});
