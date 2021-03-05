const d=document,
ls=localStorage;


export function changeMode(dataType){
  const $headerText=d.querySelectorAll(`[${dataType}='letter']`),
  $background=d.querySelectorAll(`[${dataType}="background"]`),
  $mainText=d.querySelectorAll(`[${dataType}="letter-contrast"]`),
  $titleText=d.querySelectorAll(`[${dataType}="title-contrast"]`);
  
  console.log($mainText);

  if(ls.getItem("theme")==="light") {
    localStorage.setItem("theme",'dark');
    setColor($headerText,$background,"#000");
    setColor($mainText,undefined,"#fff");
    btnChange();
  }else if(ls.getItem("theme")==="dark") {
    localStorage.setItem("theme",'light');
    setColor($headerText,$background,"#fff");
    setColor($mainText,undefined,"#000");
    btnChange();
  };
}

export function setMode(dataType){
  let mode=localStorage.getItem("theme")
    ?localStorage.getItem("theme")
    :(localStorage.setItem("theme","light"),"light");

  const $text=d.querySelectorAll(`[${dataType}='letter']`),
  $background=d.querySelectorAll(`[${dataType}="background"]`),
  $mainText=d.querySelectorAll(`[${dataType}="letter-contrast"]`),
  $titleText=d.querySelectorAll(`[${dataType}="title-contrast"]`);

  if(mode==="light"){
    setColor($text,$background,"#fff");
    setColor($mainText,undefined,"#000");
    btnChange();
  } else if (mode==="dark"){
    setColor($text,$background,"#000");
    setColor($mainText,undefined,"#fff");
    setColor($titleText,undefined,"#fca311");
    btnChange();
  };
}

function setColor(text=[],background=[],color){
  text.forEach(ele=> ele.style.color=`${color}`);
  background.forEach(ele=> ele.style.backgroundColor=`${color}`);
}
function btnChange(){
  const $btn=d.querySelector('.btn-circle');
  if(ls.getItem("theme")==="dark") {
    $btn.classList.add("btn-move")
    $btn.innerHTML="☀️";
  } else {
    $btn.classList.remove("btn-move")
    $btn.textContent="🌙";
  };
}
