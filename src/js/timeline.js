import anime from "animejs/lib/anime.es.js";

export default class Timeline {
  _translateXValue = 0;

  get translateXValue() {
    return this._translateXValue;
  }

  set translateXValue(value) {
    this._translateXValue = value;
  }

  get fillerTransform() {
    return this._fillerTransform;
  }

  set fillerTransform(value) {
    this._fillerTransform = value;
  }

  constructor() {
    // Caching
    this.datesContainer = document.getElementById("dates");
    this.dates = Array.from(this.datesContainer.querySelectorAll("li"));
    this.line = document.getElementById("line");
    this.filler = document.getElementById("filler");

    this.fillerTransform = -this.line.clientWidth;
    this.filler.style.transform = `translateX(${this.fillerTransform}px)`;

    // Initialization
    this._setDates();
    this._setEventListenets();
  }

  _setEventListenets() {
    this.navigation = document.getElementById("navigation");

    // Timeline trasformation
    this.navigation.addEventListener("click", (event) => {
      let target = event.target;

      if (!target.classList.contains("arrow")) return;
      let navigationWidth = this.navigation.clientWidth;

      let translateAmount = target.classList.contains("forward")
        ? this.translateXValue - navigationWidth
        : this.translateXValue + navigationWidth;

      this.translateXValue =
        translateAmount < -this.line.clientWidth
          ? translateAmount + navigationWidth
          : translateAmount > 0
          ? 0
          : translateAmount;

      this.fillerTransform = navigationWidth - this.line.clientWidth;

      this.filler.style.transform = `translateX(${this.fillerTransform}px)`;

      var tl = anime.timeline({
        easing: "easeInQuad",
        duration: 1000,
      });

      if (target.classList.contains("forward")) {
        tl.add({
          targets: this.filler,
          translateX: this.fillerTransform,
        })
          .add({
            targets: this.datesContainer,
            translateX: this.translateXValue,
          })
          .add(
            {
              targets: this.filler,
              translateX: -this.line.clientWidth,
            },
            "-=1000"
          );
      }
    });

    // Filler transformation
    this.datesContainer.addEventListener("click", (event) => {
      let target = event.target;

      if (target.tagName !== "LI") return;

      this.fillerTransform = target.offsetLeft - this.line.clientWidth;

      anime({
        targets: this.filler,
        translateX: this.fillerTransform,
        easing: "easeInQuad",
        duration: 500,
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
