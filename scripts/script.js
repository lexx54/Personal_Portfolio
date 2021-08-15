import { scrollDown, scrollUp } from "./scrolling.js";
const d = document;
const w = window;
const $projectList = d.querySelector(".project__list");
const $projectListTitle = $projectList.children[0];
const $projectContainer = d.querySelectorAll(".project__container");

let lastScroll = 0;
let space = 0;

d.addEventListener("scroll", e => {
  const currentScroll = w.pageYOffset;
  const direction = currentScroll > lastScroll
    ? "down"
    : "up"
  lastScroll = currentScroll;
  
  if(currentScroll>=300 && currentScroll<=2700){
    if(direction==="down"){
      space+=100;
      scrollDown(space,$projectContainer,$projectListTitle,currentScroll)
    }
    if(direction==="up"){
      space-=100;
      scrollUp(space,$projectContainer,$projectListTitle,currentScroll)
    }
  }
})

d.addEventListener("click", e => {
  console.log(e);
  console.log(e.offsetY);
  console.log(w.innerHeight)
})

