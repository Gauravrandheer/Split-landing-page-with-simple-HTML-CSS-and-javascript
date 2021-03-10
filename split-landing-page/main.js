const left = document.querySelector(`.left`);
const right = document.querySelector(`.right`);
const container = document.querySelector(`.container`);

// left.addEventListener('click', ()=>{
//     container.classList.remove('hover-right');
//     container.classList.add('hover-left');
// })
//
// right.addEventListener('click', ()=>{
//     container.classList.remove('hover-left');
//     container.classList.add('hover-right');
// })

//mouseenter basically for the hovereffect
left.addEventListener('mouseenter', ()=>{
    container.classList.add('hover-left');
})

left.addEventListener('mouseleave', ()=>{
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter', ()=>{
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave', ()=>{
    container.classList.remove('hover-right');
})
