import { nav } from "./btn-appear.js";
import { contactMaker } from "./contact.js";
import { moveLeft, moveRight, moveUp } from "./movement.js";
import { changeMode, setMode } from "./theme.js";

const d=document;
const $btnExit=d.querySelector(".menu-exit")

d.addEventListener("DOMContentLoaded",e=>{
  contactMaker();
  setMode("data-dark");
})
d.addEventListener("click",e=>{
  if (e.target.matches(".previous")) moveLeft(window.innerWidth);
  if (e.target.matches(".next")) moveRight(window.innerWidth);
  if(e.target.matches(".menu *")||e.target.matches(".menu-btn")||e.target.matches(".menu-btn i") ) moveUp();
  if(e.target.matches(".btn-circle")) {
    changeMode("data-dark");
  }
  if(e.target ===$btnExit || e.target.matches("nav li a")) nav.toggle();

})

