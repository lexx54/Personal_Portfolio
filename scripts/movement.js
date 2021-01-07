const  d=document,
  $gallery=d.querySelector(".project");
let position=0


export function moveLeft(deviceWidth){
  if(deviceWidth<720){
    if (position<0){
      position+=220;
      $gallery.style.transform=`translateX(${position}px)`;
    }
  } else if (deviceWidth>=720){
    if (position<0){
      position+=500;
      $gallery.style.transform=`translateX(${position}px)`;
    }
    console.log("720")
  }else{
    
  }
}

export function moveRight(deviceWidth){
  if(deviceWidth<720){
    if (position>-1100){
      position-=220;
      $gallery.style.transform=`translateX(${position}px)`;
    }
  } else if (deviceWidth>=720){
    if (position>-2500){
      position-=500;
      $gallery.style.transform=`translateX(${position}px)`;
    }
    console.log("720")
  }else{
    
  }

}


