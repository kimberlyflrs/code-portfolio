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
/*var sections = document.querySelectorAll("section");

const scrolling = ()=>{
    var scrollPosition = document.documentElement.scrollTop+20;
    console.log(scrollPosition);

    sections.forEach( section =>{
        console.log(scrollPosition);
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop+section.offsetHeight){
            var currentId = section.attributes.id.value;
            removeActiveLink();
            addActiveLink(currentId);
        }
    })
}

const removeActiveLink = () =>{
    document.querySelectorAll("nav li a").forEach((link)=>{
        link.classList.remove("active-link");
    })
}

const addActiveLink = (id) =>{
    var select = `nav a[href="#${id}"]`
    document.querySelector(select).classList.add("active-link");
}

const clickLink = (id)=>{
    removeActiveLink();
    addActiveLink(id);
}*/

window.onload=function(){
    navSlide();
    filterProjects("personal");
}

window.onscroll = function(){
   // scrolling();
}