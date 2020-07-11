import anime from "animejs/lib/anime.es.js";

anime({
  targets: ".loader .circle",
  scale: [0, 1],
  delay: anime.stagger(200),
  duration: 800,
  loop: true,
  easing: "linear",
});

let loaderTimeline = anime.timeline({
  easing: "linear",
  duration: 800,
  loop: true,
  direction: "alternate",
});

// Scale gray circles
loaderTimeline
  .add({
    targets: ".loader .circle-1.gray-circle",
    scale: [0, 1],
  })
  .add(
    {
      targets: ".loader .circle-2.gray-circle",
      scale: [0, 1],
    },
    200
  )
  .add(
    {
      targets: ".loader .circle-3.gray-circle",
      scale: [0, 1],
    },
    400
  )
  .add(
    {
      targets: ".loader .circle-4.gray-circle",
      scale: [0, 1],
    },
    600
  );

// Scale white circles
loaderTimeline
  .add(
    {
      targets: ".loader .circle-1.white-circle",
      scale: [0, 1],
    },
    250
  )
  .add(
    {
      targets: ".loader .circle-2.white-circle",
      scale: [0, 1],
    },
    500
  )
  .add(
    {
      targets: ".loader .circle-3.white-circle",
      scale: [0, 1],
    },
    750
  )
  .add(
    {
      targets: ".loader .circle-4.white-circle",
      scale: [0, 1],
    },
    1000
  );

export default loaderTimeline;
