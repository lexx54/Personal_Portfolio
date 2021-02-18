const d=document,
  $navBar=d.querySelector('nav');

  const toggle=()=>{
    console.log("hello world")
    $navBar.classList.toggle("menu-appear")
  }

  const nav={
    toggle
  }
export {nav};