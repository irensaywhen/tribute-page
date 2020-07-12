import anime from "animejs/lib/anime.es.js";

window.addEventListener("load", () => {
  anime({
    targets: "#loader",
    opacity: [1, 0],
    duration: 1000,
    easing: "linear",
    complete: function () {
      anime({
        targets: "#first-section .word-1",
        opacity: [0, 1],
        delay: 2000,
        duration: 1500,
        easing: "linear",
        complete: function () {
          anime({
            targets: "#first-section .word-2",
            opacity: [0, 1],
            duration: 1500,
            easing: "linear",
            complete: function () {
              anime({
                targets: "#first-section .word-3",
                opacity: [0, 1],
                duration: 1500,
                easing: "linear",
                complete: function () {},
              });
            },
          });
        },
      });
    },
  });
});

//let loader = document.getElementById("loader");
//
//anime({
//    targets:
//})

//window.addEventListener("load", () => {
//  let loader = document.getElementById("loader");
//
//  anime({
//    targets: loader,
//    opacity: [1, 0],
//    duration: 1000,
//  });
//  // Hide loader
//  //loader.style.display = "none";
//
//  // Stop animation
//  window["loaderTimeline"].pause();
//  window["loaderTimeline"] = null;
//});

//let loader = document.getElementById("loader");
//let firstSectionTimeline = anime.timeline({
//  targets: loader,
//  opacity: [1, 0],
//  duration: 4000,
//  delay: 2000,
//  easing: "easeInQuad",
//  complete: function () {
//    loaderTimeline.pause();
//  },
//});
//
//firstSectionTimeline.add({
//  targets: "#first-section",
//  opacity: [0, 1],
//  duration: 4000,
//});
//
//window["loaderTimeline"].pause();
