const hambtn = document.querySelector('#hambtn');
const body = document.querySelector('body');
const nav_bar = document.querySelector('.nav_bar');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

hambtn.addEventListener('click', function(){
    console.log('click hambtn');

    if(nav_bar.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('scroll');
        nav_bar.classList.remove('open');    
        fadeElems.forEach(function(element){
          element.classList.remove('fade-in');
          element.classList.add('fade-out');
        });
        
      }
      else { // Open Hamburger Menu
        body.classList.add('scroll');
        nav_bar.classList.add('open');
        fadeElems.forEach(function(element){
          element.classList.remove('fade-out');
          element.classList.add('fade-in');
        });
    
      }  
    }); 


    