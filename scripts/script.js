import { scrollDown, scrollUp } from "./scrolling.js";

const $projectList = document.querySelector(".project__list");
const $projectListTitle = $projectList.children[0];
const $projectContainer = document.querySelectorAll(".project__container");

let lastScroll = 0;
let space = 0;

document.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const direction = currentScroll > lastScroll ? "down" : "up";
  lastScroll = currentScroll;
  
  if (currentScroll >= 300 && currentScroll <= 2500){
    if (direction === "down"){
      space += 100;
      scrollDown(space,$projectContainer,$projectListTitle,currentScroll);
    }
    if (direction === "up"){
      space -= 100;
      scrollUp(space,$projectContainer,$projectListTitle,currentScroll);
    }
  }
});

document.addEventListener("click", e => {
  console.log(e);
  console.log(e.offsetY);
  console.log(w.innerHeight);
});

