// document references

let left = document.getElementById('left');
let right = document.getElementById('right');
let img = document.getElementById('image');

// function variables

const images = ['limo.webp','muscle2.webp','racer.png','muscle.webp','scrap.webp'];
let currentimg = 'limo.webp';

// eventListeners

left.addEventListener('click', ()=>{
    imgChanger('left')
})

right.addEventListener('click', ()=>{
    imgChanger('right')
})

// piltaster

document.addEventListener('keydown', function(event) {

    // venstretast
    if (event.code === 'ArrowLeft') {
      imgChanger('left');

    // høyretast
    } else if (event.code === 'ArrowRight') {
      imgChanger('right');
    }

  });

// functions

function imgChanger(direction) {
    let currentIndex = images.indexOf(currentimg);
    let newIndex = 0;
  
    if (direction === 'left') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else if (direction === 'right') {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
  
    img.src = 'img/' + images[newIndex];
    currentimg = images[newIndex];
    img.classList.add('flash');
    setTimeout(() => {
        img.classList.remove('flash');
      }, 400);
  }