document.addEventListener("click",e=>{
  if (e.target.matches(".container" || ".turn-off")){
    let cont=document.querySelector("aside");
    cont.parentNode.removeChild(cont)
    
  }
})