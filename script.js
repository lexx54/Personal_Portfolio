const d=document,
  $gallery=d.querySelector(".project");

  let position=0


d.addEventListener("click",e=>{
  
  if (e.target.matches(".previous")){
    if (position<0){
      position+=220;
      $gallery.style.transform=`translateX(${position}px)`;
    }
  }
  if (e.target.matches(".next")){
    if (position>-1100){
      position-=220;
      $gallery.style.transform=`translateX(${position}px)`;
    }
  }
})