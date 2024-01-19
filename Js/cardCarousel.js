const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".btnFlecha")
const fisrtCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

//Obtiene la cantidad de tarjetas que se permite tener a la vez
let cardPeView = Math.round(carouselChildrens.offsetWidth / fisrtCardWidth)

//Añade la ultima tarjetas al inicio del slider para que sea infinito
carouselChildrens.slice(-cardPeView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);

});

//Añade copias de la primera tarjeta luego de la ultima tarjeta del slider
carouselChildrens.slice(0, cardPeView).forEach(card =>{
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);

});

//Evento que permite a los botones de flechas hacer scroll de izquierda a derecha
arrowBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        carousel.scrollLeft += btn.id === "left" ? -fisrtCardWidth : fisrtCardWidth;
    })
}
)

const dragStar = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft; 
}

const dragging = (e) => {

    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    
}
const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
}


const autoPlay = () => {
    if(window.innerWidth < 800) return;
    //Autoplay del  slider cada 2500ms
    timeoutId = setTimeout(() => carousel.scrollLeft += fisrtCardWidth, 3000)
}

autoPlay();

const infiniteScroll = () =>{

    if(carousel.scrollLeft === 0){
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition")


    }else if(Math.ceil(carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth)){
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.offsetWidth;        
        carousel.classList.remove("no-transition")
}

//Si el usuario no a hecho hover encima de las tarjetas, limpia le tiempo existente y inicia el AutoPlay desde el inicio
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStar);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
