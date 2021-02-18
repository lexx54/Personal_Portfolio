const d=document,
ls=localStorage;

export function changeMode(dataType){
  const $headerText=d.querySelectorAll(`[${dataType}='letter']`),
  $background=d.querySelectorAll(`[${dataType}="background"]`),
  $mainText=d.querySelectorAll(`[${dataType}="letter-contrast"]`)
  
  if(ls.getItem("theme")==="light") {
    localStorage.setItem("theme",'dark')
    darkMode($headerText,$background);
    lightMode($mainText,null) //Doesn't need to change background
    btnChange()
  }else if(ls.getItem("theme")==="dark") {
    localStorage.setItem("theme",'light')
    lightMode($headerText,$background);
    darkMode($mainText,null) //Fix this bug
    btnChange()
  };
}

export function setMode(dataType){
  let mode=localStorage.getItem("theme")?localStorage.getItem("theme"):(localStorage.setItem("theme","light"),"light");
  const $text=d.querySelectorAll(`[${dataType}='letter']`),
  $background=d.querySelectorAll(`[${dataType}="background"]`);

  if(mode==="light"){
    lightMode($text,$background);
    btnChange()
  } else if (mode==="dark"){
    darkMode($text,$background)
    btnChange();
  };
}

function lightMode(text,background){
  text.forEach(ele=> ele.style.color="white");
  background.forEach(ele=> ele.style.backgroundColor='white');
}
function darkMode(text,background){
  text.forEach(ele=> ele.style.color="black");
  background.forEach(ele=> ele.style.backgroundColor='black');
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
