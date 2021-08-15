const scrollDown = (space,container,title,current) => {
    title.style.transform = `translateY(${current-300}px)`;
    container[0].style.transform = `translateY(${current-300}px)`;
    for (let i = 1; i < container.length; i++){
      container[i].style.transform = `translateY(${current-300 - space}px)`;
    } 
    if(space >=500 ) container[1].style.transform = `translateY(${current-750}px)`
    if(space >=900 ) container[2].style.transform = `translateY(${current-1200}px)`
    if(space >=1400 ) container[3].style.transform = `translateY(${current-1650}px)`
    if(space >=1900 ) container[4].style.transform = `translateY(${current-2100}px)`
    if(space >=2300 ) container[5].style.transform = `translateY(${current-2550}px)`
  }

const scrollUp = (space,container,title,current) => {
  title.style.transform = `translateY(${current-300}px)`;
  container[0].style.transform = `translateY(${current-300}px)`;

  for (let i = 1; i < container.length; i++){
    container[i].style.transform = `translateY(${current-300 - space}px)`;
  } 
  if(space >=500 ) container[1].style.transform = `translateY(${current-750}px)`
  if(space >=900 ) container[2].style.transform = `translateY(${current-1200}px)`
  if(space >=1400 ) container[3].style.transform = `translateY(${current-1650}px)`
  if(space >=1900 ) container[4].style.transform = `translateY(${current-2100}px)`
  if(space >=2300 ) container[5].style.transform = `translateY(${current-2550}px)`
  



  // for (let i = 1; i < container.length; i++){
  //   container[i].style.transform = `translateY(-${space}px)` 
  // }
  // if(space < 450){
  //   list.style.height = "auto";
  // } 
  // if (space >= 450)container[1].style.transform = `translateY(-450px)`
  // if (space >= 900)container[2].style.transform = `translateY(-900px)`
  // if (space >= 1350)container[3].style.transform = `translateY(-1350px)`
  // if (space >= 1800)container[4].style.transform = `translateY(-1800px)`
  // if (space >= 2250){
  //   container[5].style.transform = `translateY(-2250px)`
  //   list.style.height = "110vh";
  //   return true
  // }
}

export {scrollDown, scrollUp};