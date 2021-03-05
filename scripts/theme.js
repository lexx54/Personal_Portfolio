const d=document,
  ls=localStorage,
  $mainText=d.querySelectorAll(`[data-dark="letter-contrast"]`),
  $background=d.querySelectorAll(`[data-dark="background"]`),
  $headerText=d.querySelectorAll(`[data-dark='letter']`),
  $text=d.querySelectorAll(`[data-dark='letter']`);


export function changeMode(dataType){
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

  if(mode==="light"){
    setColor($text,$background,"#fff");
    setColor($mainText,undefined,"#000");
    btnChange();
  } else if (mode==="dark"){
    setColor($text,$background,"#000");
    setColor($mainText,undefined,"#fff");
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
