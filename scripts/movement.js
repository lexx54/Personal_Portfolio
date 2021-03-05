const  d=document,
  $gallery=d.querySelector(".project");
let width=0;

export const movement={
  right,
  left,
};

auto()
function right(direction){
  console.log("move")
  const arrow= d.querySelector(`.${direction}`),
    $card=d.querySelectorAll(".project-card"),
    $cardWidth=$card[0].clientWidth,
    maxWidth=$cardWidth*($card.length-1);

  width<0
    ?width+=$cardWidth
    :width=-maxWidth;

  $card.forEach(card=>card.style.transform=`translateX(${width}px)`);
}

function left(direction){
  const arrow= d.querySelector(`.${direction}`),
    $card=d.querySelectorAll(".project-card"),
    $cardWidth=$card[0].clientWidth,
    maxWidth=$cardWidth*($card.length-1);

  width>-maxWidth
    ?width-=$cardWidth
    :width=0;
  $card.forEach(card=>card.style.transform=`translateX(${width}px)`);
}

function auto(){
  setInterval(console.log("hello"),1000)
}




//old way
export function moveUp(){
  const $menu=d.querySelector(".menu");

  $menu.classList.toggle("menu-move")
}


