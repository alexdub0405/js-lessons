function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderCircles() {
  const container = document.querySelector(".circles-list");
  container.innerHTML = "";
  const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D"];
  for (let i = 0; i < 10; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    const randomLeftOffset = getRandomInt(0, container.clientWidth);
    const randomTopOffset = getRandomInt(0, container.clientHeight);
    const randomColor = getRandomInt(0, 9);
    circle.style.left = `${randomLeftOffset}px`;
    circle.style.top = `${randomTopOffset}px`;
    circle.style.backgroundColor = colors[randomColor];
    container.appendChild(circle);
  }
}

document.querySelector(".btn").addEventListener("click", renderCircles);
