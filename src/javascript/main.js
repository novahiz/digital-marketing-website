
// VARRIABLE£
const burgerBtn = document.querySelector("#burger");
const navMenu = document.querySelector(".nav")
const txtAnime = document.querySelector(".services");
//ecouteur d'évennement
burgerBtn.addEventListener('click', burgerClick);

//fonction

function burgerClick() {
    burgerBtn.classList.toggle("active");
    if(burgerBtn.classList.contains("active")){
        navMenu.classList.add("active")
    }else{
        navMenu.classList.remove("active")
    }
} 

//librairy

//typeJs

    // Header Text Animation

    var sloganAnimation = new Typewriter(".slogan", {
        loop: true,
        delay: 30,
    });
    
    sloganAnimation
        .typeString(' Live <strong style = "color:#6d5404 ;" >Analysis!</strong>')
        .pauseFor(1000)
        .deleteChars(9)
        .typeString('<strong style = "color: blue;" >Trade!</strong>')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Des Astus <span style="color: green;">Gratuit !</span>')
        .pauseFor(1000)
    .start();

// End TypeJs