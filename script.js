const button = document.getElementById('button');
const bg = document.getElementById('container');
  

button.addEventListener('click',()=>{
    let color='#';
    color += Math.random().toString(16).slice(2,8);
    bg.style.backgroundColor = color;
})