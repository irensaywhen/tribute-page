import anime from "animejs/lib/anime.es.js";

export default class Timeline {
  _translateXValue = 0;

  get translateXValue() {
    return this._translateXValue;
  }

  set translateXValue(value) {
    this._translateXValue = value;
  }

  constructor() {
    // Caching
    this.datesContainer = document.getElementById("dates");
    this.dates = Array.from(this.datesContainer.querySelectorAll("li"));

    // Initialization
    this._setDates();
    this._setEventListenets();
  }

  _setEventListenets() {
    this.navigation = document.getElementById("navigation");

    this.navigation.addEventListener("click", (event) => {
      let target = event.target;

      if (!target.classList.contains("arrow")) return;

      //let navigationWidth = this.navigation.clientWidth;
      // Set here dependency on the zero and maximum line width
      let translateAmount = target.classList.contains("forward")
        ? this.translateXValue - this.navigation.clientWidth
        : this.translateXValue + this.navigation.clientWidth;

      this.translateXValue = translateAmount;

      anime({
        targets: this.datesContainer,
        translateX: translateAmount,
      });
    });
  }

  _setDates() {
    this.dates.forEach((li) => {
      let year = li.dataset.year;

      // Make element for year content
      let span = document.createElement("span");
      span.textContent = year;
      span.classList.add("date");

      // Append it to the list item
      li.append(span);
    });
  }
}
