class Chart {
  constructor(height, background, hasBorder) {
    this.height = height;
    this.background = background;
    this.hasBorder = hasBorder;
  }
}

// OOP Inheritance (наслідуванння батьк. класу)
class ChartClickable extends Chart {
  isClickable = true;
  handleClick() {
    alert("click on Clickable Chart");
  }
}

// OOP Polymorphism (перезаписування батьк. класу)
class ChartClickableSecond extends ChartClickable {
 handleClick() {
  super.handleClick();
    alert("click on Clickable Second Chart");
  }
}

// OOP Encapsulation (приховати методи і властивості класу в середині цього класу)
class ChartClickable3 extends Chart {
  #isClickable = true;
  handleClick() {
    alert("click on Clickable Chart");
  }
  getIsClickable() {
    return this.#isClickable;
  }
}

// OOP Abstraction (надання доступу до функціоналу, а не імплементації)


function renderChart(chartData) {
  const chartsContainer = document.querySelector(".charts-container");
  const chart = document.createElement("div");
  chart.classList.add("chart");
  chart.style.height = chartData.height;
  chart.style.backgroundColor = chartData.background;
  if (chartData.hasBorder) {
    chart.style.border = "2px solid black";
  }
  if (chartData.isClickable) {
    chart.addEventListener("click", chartData.handleClick);
  }
  chartsContainer.appendChild(chart);
}

renderChart(new Chart("250px", "green", true));
renderChart(new Chart("220px", "red", false));
renderChart(new Chart("190px", "yellow", true));
renderChart(new Chart("160px", "blue", false));
renderChart(new Chart("130px", "brown", true));

renderChart(new ChartClickable("235px", "orange", true));

renderChart(new ChartClickableSecond("85px", "tomato", true));
