var camisa = document.getElementById("camisa");
var direction = 1;
var position = 0;
var speed = 0.5;

function moveCamisa() {
  position += direction * speed;
  camisa.style.transform = "translateY(" + position + "px)";

  if (position >= 60 || position <= -15) {
    direction *= -1;
  }

  requestAnimationFrame(moveCamisa);
}

moveCamisa();

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
    behavior: "smooth",
    //inline: "center", //tirar caso atrapalhe
    block: "nearest",
    });

    items[currentItem].classList.add("current-item");
  });
});
