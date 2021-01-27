const d=document,
ls=localStorage;

export function changeMode(dataType){
  const $text=d.querySelectorAll(`[${dataType}='letter']`),
  $background=d.querySelectorAll(`[${dataType}="background"]`);
  
  if(ls.getItem("theme")==="light") {
    localStorage.setItem("theme",'dark')
    darkMode($text,$background);
    btnChange()
  }else if(ls.getItem("theme")==="dark") {
    localStorage.setItem("theme",'light')
    lightMode($text,$background);
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

function lightMode(t,b){
  t.forEach(ele=> ele.style.color="white");
  b.forEach(ele=> ele.style.backgroundColor='white');
}
function darkMode(t,b){
  t.forEach(ele=> ele.style.color="black");
  b.forEach(ele=> ele.style.backgroundColor='black');
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
