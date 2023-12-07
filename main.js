const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");
const front = document.querySelector(".front");
const tail = document.querySelector(".tail");
const wheel = document.querySelector(".wheel");

//gsapのタイムラインを使う時に必要なファンクション。
const tl = gsap.timeline();

//gsapタイムラインの書き方。tl.fromTo(taruget, duration, {from: }, {to: }).fromTo...で続く。
tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(hero, 1.2, { width: "100%" }, { width: "80%" })
  .fromTo(
    slider,
    0.8,
    { y: "-100%" },
    { y: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(logo, 0.5, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(menu, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline, 1, { opacity: 0, x: 0 }, { opacity: 1, x: 10 })
  .fromTo(front, 1.2, { width: "0%" }, { width: "80%" })
  .fromTo(tail, 1.2, { width: "0%" }, { width: "80%" })
  .fromTo(wheel, 1.2, { width: "0%" }, { width: "80%" });
