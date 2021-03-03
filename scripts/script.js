import { nav } from "./btn-appear.js";
import { contactMaker } from "./contact.js";
import { movement } from "./movement.js";
import { changeMode, setMode } from "./theme.js";

const d=document;
const $btnExit=d.querySelector(".menu-exit")

d.addEventListener("DOMContentLoaded",e=>{
  contactMaker();
  setMode("data-dark");
  // movement.auto();
})
d.addEventListener("click",e=>{
  if (e.target.matches(".arrow-left")) movement.left("arrow-left");
  if (e.target.matches(".arrow-right")) movement.right("arrow-right");
  if(e.target.matches(".menu *")||e.target.matches(".menu-btn")||e.target.matches(".menu-btn i") ) moveUp();
  if(e.target.matches(".btn-circle")) {
    changeMode("data-dark");
  }
  if(e.target ===$btnExit || e.target.matches("nav li a")) nav.toggle();

})

