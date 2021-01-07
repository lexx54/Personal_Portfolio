import { moveLeft, moveRight } from "./movement.js";

const d=document;


d.addEventListener("click",e=>{
  if (e.target.matches(".previous")) moveLeft(window.innerWidth);
  if (e.target.matches(".next")) moveRight(window.innerWidth);
})