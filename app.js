
projects = document.querySelectorAll(".project");

document.querySelector(".nav__bar-skills").addEventListener("click", function(){

    document.querySelector(".nav__bar-home").classList.remove("active-link");
    document.querySelector(".nav__bar-skills").classList.add("active-link");
    document.querySelector(".nav__bar-projects").classList.remove("active-link");

    document.querySelector(".box-home").classList.remove("active");
    document.querySelector(".box-3").classList.remove("active");
    document.querySelector(".box-2").classList.add("active");

    document.querySelector(".content__box-1").classList.add("ani-box1");
    document.querySelector(".content__box-2").classList.add("ani-box2");
    document.querySelector(".content__box-3").classList.add("ani-box3");
    document.querySelector(".skills__btn").classList.add("ani__skills-btn"); 

    document.querySelector(".bio__img").classList.remove("ani_bio-img");
    document.querySelector(".bio__head").classList.remove("ani_bio-head");
    document.querySelector(".bio__p").classList.remove("ani_bio-p");    
    document.querySelector(".bio__btn").classList.remove("ani_bio-btn");  



    projects.forEach( el => {
        el.classList.remove('ani_scale')
    });
})


document.querySelector(".nav__bar-home").addEventListener("click", function(){

    // document.querySelector(".nav__bar-home").style.borderBottom = "1px solid black"

    document.querySelector(".nav__bar-home").classList.add("active-link");
    document.querySelector(".nav__bar-skills").classList.remove("active-link");
    document.querySelector(".nav__bar-projects").classList.remove("active-link");

    document.querySelector(".box-home").classList.add("active");
    document.querySelector(".box-2").classList.remove("active"); 
    document.querySelector(".box-3").classList.remove("active");

    document.querySelector(".content__box-1").classList.remove("ani-box1");
    document.querySelector(".content__box-2").classList.remove("ani-box2");
    document.querySelector(".content__box-3").classList.remove("ani-box3"); 
    document.querySelector(".skills__btn").classList.remove("ani__skills-btn");  
     
    
    document.querySelector(".bio__img").classList.add("ani_bio-img");
    document.querySelector(".bio__head").classList.add("ani_bio-head");
    document.querySelector(".bio__p").classList.add("ani_bio-p");
    document.querySelector(".bio__btn").classList.add("ani_bio-btn");  
  


    projects.forEach( el => {
        el.classList.remove('ani_scale')
    });
})

document.querySelector(".nav__bar-projects").addEventListener("click", function(){

    document.querySelector(".nav__bar-skills").classList.remove("active-link");

    document.querySelector(".nav__bar-home").classList.remove("active-link");
    document.querySelector(".nav__bar-projects").classList.add("active-link");

    document.querySelector(".box-3").classList.add("active");
    document.querySelector(".box-home").classList.remove("active"); 
    document.querySelector(".box-2").classList.remove("active");

    document.querySelector(".bio__img").classList.remove("ani_bio-img");
    document.querySelector(".bio__head").classList.remove("ani_bio-head");
    document.querySelector(".bio__p").classList.remove("ani_bio-p");    
    document.querySelector(".bio__btn").classList.remove("ani_bio-btn")

    document.querySelector(".content__box-1").classList.remove("ani-box1");
    document.querySelector(".content__box-2").classList.remove("ani-box2");
    document.querySelector(".content__box-3").classList.remove("ani-box3"); 
    document.querySelector(".skills__btn").classList.remove("ani__skills-btn");  

    projects.forEach( el => {
        el.classList.add('ani_scale')
    });

})
