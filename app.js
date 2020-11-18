//javascript file
const navSlide = ()=>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    menu.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        if(nav.style.transition){
            nav.style.transition= 'transform 0.5s ease-out';
            const slide = ()=>{
                nav.style.transition= '';
            }
            setTimeout(slide, 1000);
        }
        else{
            nav.style.transition= 'transform 0.5s ease-in';
        }


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

/*Filtering elements on the project page */

const filterProjects = (project) => {
    var projects = document.getElementsByClassName('filterProject');
    for(var i=0; i<projects.length;i++){
        /*Remove the show class */
        removeClass (projects[i], "show");
        if(projects[i].className.indexOf(project)>-1){
            /*Add the show class to it */
            addClass(projects[i], "show");
        }
    }
    activeBtn(project);
}

const removeClass = (project, name) =>{
    project.className = project.className.replace(name, "");
}

const addClass = (project, name) =>{
    project.className += " "+name; 
}

const activeBtn = (project) =>{
    //adds active to filter btn, deletes other not active
    var filterBtns = document.getElementsByClassName('filter-btn');
    if(project === "filterProject"){
        project = "all";
    }
    for(var i=0; i<filterBtns.length;i++){
        /*Remove the show class */
        removeClass(filterBtns[i], "active-btn");
        if(filterBtns[i].className.indexOf(project)>-1){
            addClass(filterBtns[i], "active-btn");
        }
    }    
}



/*const scroll = () =>{
    //make items visible on scroll
    var items = document.querySelectorAll('.hide');
    console.log(items);
    for (var i=0; i<items.length;i++){
        console.log(items[i]);
        var bottom_object = items[i].position().top + items[i].outerHeight();
        var bottom_window = window.scrollTop()+window.innerHeight();

        console.log(bottom_object);
        console.log(bottom_window);
    }
}*/

window.onload=function(){
    navSlide();
    filterProjects("personal");
}

/*window.onscroll=function(){
    scroll();
}*/