const hambtn = document.querySelector('#hambtn');
const header = document.querySelector('.header');
hambtn.addEventListener('click', function(){
    console.log('click hambtn');

    if(header.classList.contains('open')){
        header.classList.remove('open');
    }
    else{
        header.classList.add('open');
    }
});