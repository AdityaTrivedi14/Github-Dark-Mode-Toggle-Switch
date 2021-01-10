const mode = document.querySelector('#night');
const body = document.querySelector('body');

mode.addEventListener('change',()=>{
    body.classList.toggle('nightMode');
});