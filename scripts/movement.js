const  d=document,
  $gallery=d.querySelector(".project");
let position=0

export const movement={
  right,
  left
};

function right(direction){
  const arrow= d.querySelector(`.${direction}`);
  console.log(`moving ${direction}`);
  if(arrow) console.log(arrow);
}

function left(direction){
  const arrow= d.querySelector(`.${direction}`);
  console.log(`moving ${direction}`);
  if(arrow) console.log(arrow);
}






//old way
export function moveLeft(deviceWidth){
  if(deviceWidth<720){
    if (position<0){
      position+=220;
      $gallery.style.transform=`translateX(${position}px)`;
    }
  } else if (deviceWidth>720 && deviceWidth<1020){
    if (position<0){
      position+=500;
      $gallery.style.transform=`translateX(${position}px)`;
    }
    console.log("720")
  }else{
    if (position<0){
      position+=920;
      $gallery.style.transform=`translateX(${position}px)`;
    }
  }
}

export function moveRight(deviceWidth){
  if(deviceWidth<720){
    if (position>-1100){
      position-=220;
      $gallery.style.transform=`translateX(${position}px)`;
    }
  } else if (deviceWidth>720 && deviceWidth<1020){
    if (position>-2500){
      position-=500;
      $gallery.style.transform=`translateX(${position}px)`;
    }
    console.log("720")
  } else{
    if (position>-4600){
      position-=920;
      $gallery.style.transform=`translateX(${position}px)`;
    }
  }

}
export function moveUp(){
  const $menu=d.querySelector(".menu");

  $menu.classList.toggle("menu-move")
}


