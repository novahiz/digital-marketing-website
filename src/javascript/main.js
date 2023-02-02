
// VARRIABLE£
const burgerBtn = document.querySelector("#burger");
const navMenu = document.querySelector(".nav")
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

    // Landing Page Services animation

    var sloganAnimation = new Typewriter(".services-txt-anime", {
        loop: true,
        delay: 30,
    });
    
    sloganAnimation
        .typeString('Community Manegement')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Rédaction Web')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Création de <strong style = "color: var(--color-blue);" >Site web</strong>')
        .pauseFor(1000)
        .deleteChars(8)
        .typeString('<span style="color: var(--color-yellow);">Logo</span>')
        .pauseFor(1000)
        .deleteChars(4)
        .typeString('<span style="color: var(--color-pink);">Flyer</span>')
        .pauseFor(1000)
        .deleteAll()
    .start();

// End TypeJs