const d=document;

export function observer(){
  const $section=d.querySelectorAll(".skills-container");

  const cb=(entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        for (const ele of entry.target.children){
          ele.classList.add("skills-box-move");
        }
      } else{
        for (const ele of entry.target.children){
          ele.classList.remove("skills-box-move");
        }
      }
    })
  }
    const observer=new IntersectionObserver(cb,{threshold:0.3});
    $section.forEach(box=>observer.observe(box))
}
  


