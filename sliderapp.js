console.log("No witam kurde");

let arrowLeft = document.querySelector('#arrow-left');
let arrowRight= document.querySelector('#arrow-right');


let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');

let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');

let years1 = document.querySelector('#years1');
let years2 = document.querySelector('#years2');
let years3 = document.querySelector('#years3');

let activeSlideNumber = 1; 

let hideActiveSlide = () => {
    let activeElement = document.querySelectorAll('.active');
    console.log("Active elements 1:");
    console.log(activeElement);

   activeElement.forEach(function(el) {
        el.classList.remove("active")
      })


}


let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
    document.querySelector('#years'+slideNumber).classList.add('active');
} 


let showNextSlide = () => {

    if (activeSlideNumber ===3)
    {
        activeSlideNumber =1;
    }

    else
    {
        activeSlideNumber = activeSlideNumber + 1;

    }

    showSlide(activeSlideNumber);

}


let showPrevSlide = () => {

    if (activeSlideNumber ===1)
    {
        activeSlideNumber =3;
    }

    else
    {
        activeSlideNumber = activeSlideNumber - 1;

    }

    showSlide(activeSlideNumber);

}


for(let i=1; i<=3; i++) {
    let showSlideI= () => {
        activeSlideNumber = i;
        showSlide(i);
    }
    document.querySelector('#dot'+i).addEventListener('click',showSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPrevSlide);


