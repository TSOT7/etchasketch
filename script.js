const cdiv = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.setAttribute("id", `theBox${i}`);
  cdiv.appendChild(div);
}

const boxes = document.querySelectorAll("div.container > div");

boxes.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black"
  });
});



