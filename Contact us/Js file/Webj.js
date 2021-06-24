const hambtn = document.querySelector('#hambtn');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

hambtn.addEventListener('click', function(){
    console.log('click hambtn');

    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('scroll');
        header.classList.remove('open');    
        fadeElems.forEach(function(element){
          element.classList.remove('fade-in');
          element.classList.add('fade-out');
        });
        
      }
      else { // Open Hamburger Menu
        body.classList.add('scroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
          element.classList.remove('fade-out');
          element.classList.add('fade-in');
        });
    
      }  
    }); 

<<<<<<< HEAD:NEWS/news.js
=======
    //extra
>>>>>>> News-Letter-page-and-Contact-Us-page:Contact us/Js file/Webj.js
    