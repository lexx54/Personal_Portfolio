const d=document,
ls=localStorage;

export function theme(dataType){
  const $text=d.querySelectorAll(`[${dataType}='letter']`),
  $background=d.querySelectorAll(`[${dataType}="background"]`);
  
  if(ls.getItem("theme")===null) ls.setItem("theme","light");
  if(ls.getItem("theme")==="light") lightMode($text,$background);
  if(ls.getItem("theme")==="dark") darkMode($text,$background);
 
  console.log($background)
}

function lightMode(t,b){
  ls.setItem("theme","light");
  t.forEach(ele=>{
    ele.style.color="white";
  })
  b.forEach(ele=>{
    ele.style.backgroundColor='white';
  })
}
function darkMode(t,b){
  ls.setItem("theme","dark");
  t.forEach(ele=>{
    ele.style.color="black";
  })
  b.forEach(ele=>{
    ele.style.backgroundColor='black';
  })
}