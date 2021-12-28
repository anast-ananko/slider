const upButton = document.querySelector('.button-up');
const downButton = document.querySelector('.button-down');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesLength = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;


sidebar.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up');
});

downButton.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('wheel', (event) => {
    if (event.offsetY > 0) changeSlide('up');
    else changeSlide('down');
});

function changeSlide (direction) {
     if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
       
    } else if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
           activeSlideIndex = slidesLength - 1;
        }
        
    }

    const sliderHeight = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

}

console.log('score: 20/30');
console.log('stage 1: all task completed');
console.log('stage 2: not implemented');
console.log('stage 3: all task completed');

