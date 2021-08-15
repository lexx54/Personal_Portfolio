// import { observer } from "./observer.js";
import { scrollDown, scrollUp } from "./scrolling.js";
const d = document;
const w = window;
const $projectList = d.querySelector(".project__list");
const $projectListTitle = $projectList.children[0];
const $projectContainer = d.querySelectorAll(".project__container");

let elementsScrolled = 0;
let lastScroll = 0;
let space = 0;

d.addEventListener("scroll", e => {
  console.log("last Window",lastScroll)
  const currentScroll = w.pageYOffset;
  const direction = currentScroll > lastScroll
    ? (lastScroll = currentScroll,"down")
    : (lastScroll = currentScroll,"up")
 
  console.log("current window",currentScroll)
  
  if(currentScroll>=300 
    && direction==="down"
    && currentScroll<=2700){
    space+=100;
    scrollDown(space,$projectContainer,$projectList,$projectListTitle,currentScroll)
  }
  // if(currentScroll>=300 && direction==="up"){
  //   space-=100;
  //   scrollUp(space,$projectContainer,$projectList,$projectListTitle,currentScroll)
  // }
  console.log("space",space);
})


// d.onscroll = e => {
//   let currentScroll = w.pageYOffset;
//   console.log("window",w.pageYOffset);
//   currentScroll > lastScroll
//     ? lastScroll = currentScroll
//     : lastScroll = currentScroll

//   if (currentScroll >= 300 && elementsScrolled === 0 ){
//     document.documentElement.scrollTop = document.body.scrollTop = 300;
//     space+=50;
//     console.log(space)
//     elementsScrolled = 
//       scrollDown(space,$projectContainer,$projectList) !== true
//         ? 0
//         : 6 ;
//   }
//   if (currentScroll <= 300 && currentScroll >= 200){
//     document.documentElement.scrollTop = document.body.scrollTop = 300;
//     space-=50;
//     console.log(space)
//     scrollUp(space,$projectContainer,$projectList)
//   }else {
//     // document.documentElement.scrollTop = document.body.scrollTop = currentScroll
//   }
// //   if(currentScroll <200 && currentScroll >300){
// //     document.documentElement.scrollTop = document.body.scrollTop = currentScroll
// //   }
// }
d.addEventListener("click", e => {
  console.log(e);
  console.log(e.offsetY);
  console.log(w.innerHeight)
})

