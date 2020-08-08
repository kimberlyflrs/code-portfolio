//javascript file

const navSlide = ()=>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        nav.style.transition= 'transform 0.5s ease-in';
        //needs to be removed afterwards to prevent 
        //the transition occuring after click

        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation ="";
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .75}s`;
            }
        })

        menu.classList.toggle('toggle');
    })
}

const wordChange = () =>{
    //changes from front-end developer to designer to user research
    const word = document.querySelector('.wordChange');
    console.log('got it')
    //push text up after 4 seconds
    setTimeout(function(){ alert("Hello"); }, 3000);
    //show new word
    //repeat
}

window.onload=function(){
    navSlide();
    //wordChange();
}