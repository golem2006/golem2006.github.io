let offset = 0;

const sliderLine = document.querySelector('.slider-line');

const sliderItems = sliderLine.childElementCount;
let count = 0;

let pageWidth = document.body.offsetWidth;

let active = "";
let step = "";

sliderLine.addEventListener('touchstart', handleTouchStart, false);
sliderLine.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff < 0) {
            //left
            console.log("left");
            pageWidth = document.body.offsetWidth;
    pageWidth *= 0.02;
    // вычисление отступов

    let allElem = document.querySelectorAll('.count');

    

    let next = "";
    count += 1;
    if (count == sliderItems) {
        // С помощью переменной count вычисляю активный и следующий слайд, применяю и забираю к ним стили
        allElem[count - 1].classList.remove('slider-active');

        count = 0;

        allElem[count].classList.add('slider-active');
        active = allElem[count];
        step = active.offsetWidth;
        
        next = allElem[count + 1];


        let minusStep = allElem[count + 1].offsetWidth;
        

        offset = step + pageWidth - ((sliderItems / 2) * minusStep);
        offset = offset - pageWidth;
        offset= 0;
    }
    else {
        
        allElem[count - 1].classList.remove('slider-active');

        allElem[count].classList.add('slider-active');
        active = allElem[count];
        step = active.offsetWidth;
        
        if (count == 0) {
            next = allElem[count + 1];
        }
        else {
            next = allElem[count - 1];
        }

        let minusStep = next.offsetWidth;

        offset = offset + (step - minusStep - pageWidth);
    }

    
    offset = offset - pageWidth;
    sliderLine.style.left = -offset + 'px';
        }
        else {
            //right
            console.log("right");
            pageWidth = document.body.offsetWidth;
    active = "";
    step = "";

    pageWidth *= 0.02;

    let allElem = document.querySelectorAll('.count');
    let next = "";
    count -= 1;
    if (count == -1) {
        
        allElem[count + 1].classList.remove('slider-active');

        count = sliderItems - 1;

        allElem[count].classList.add('slider-active');
        active = allElem[count];
        step = active.offsetWidth;

        next = allElem[count - 1];

        let minusStep = next.offsetWidth;

        offset = (step + pageWidth + minusStep);
        offset = offset + pageWidth * sliderItems + pageWidth * sliderItems;
        
        
    }
    else {
        
        allElem[count + 1].classList.remove('slider-active');

        allElem[count].classList.add('slider-active');
        active = allElem[count];
        step = active.offsetWidth;
        
        if (count == 0) {
            next = allElem[count + 1];
        }
        else {
            next = allElem[count - 1];
        }

        let minusStep = next.offsetWidth;

        offset = offset - (step - minusStep + (pageWidth));
        offset = offset + pageWidth;
    }

    

    offset = offset + pageWidth;
    sliderLine.style.left = -offset + 'px';
        }
    }
    x1 = null;
    y1 = null;
}

// кнопка вперёд

document.querySelector('#leftone').addEventListener('click', function () {
    console.log("true");
    
    

    pageWidth = document.body.offsetWidth;
    pageWidth *= 0.02;
    // вычисление отступов

    let allElem = document.querySelectorAll('.count');

    

    let next = "";
    count += 1;
    if (count == sliderItems) {
        // С помощью переменной count вычисляю активный и следующий слайд, применяю и забираю к ним стили
        allElem[count - 1].classList.remove('slider-active');

        count = 0;

        allElem[count].classList.add('slider-active');
        active = allElem[count];
        step = active.offsetWidth;
        
        next = allElem[count + 1];


        let minusStep = allElem[count + 1].offsetWidth;
        

        offset = step + pageWidth - ((sliderItems / 2) * minusStep);
        offset = offset - pageWidth;
        offset= 0;
    }
    else {
        
        allElem[count - 1].classList.remove('slider-active');

        allElem[count].classList.add('slider-active');
        active = allElem[count];
        step = active.offsetWidth;
        
        if (count == 0) {
            next = allElem[count + 1];
        }
        else {
            next = allElem[count - 1];
        }

        let minusStep = next.offsetWidth;

        offset = offset + (step - minusStep - pageWidth);
    }

    
    offset = offset - pageWidth;
    sliderLine.style.left = -offset + 'px';
    
    // console.log(offset);
});

// кнопка назад

document.querySelector('#rightone').addEventListener('click', function () {

    // if (offset >350) {
    //     offset= 0;
    // }

    pageWidth = document.body.offsetWidth;
    active = "";
    step = "";

    pageWidth *= 0.02;

    let allElem = document.querySelectorAll('.count');
    let next = "";
    count -= 1;
    if (count == -1) {
        
        allElem[count + 1].classList.remove('slider-active');

        count = sliderItems - 1;

        allElem[count].classList.add('slider-active');
        active = allElem[count];
        step = active.offsetWidth;

        next = allElem[count - 1];

        let minusStep = next.offsetWidth;

        offset = (step + pageWidth + minusStep);
        offset = offset + pageWidth * sliderItems + pageWidth * sliderItems;
        
        
    }
    else {
        
        allElem[count + 1].classList.remove('slider-active');

        allElem[count].classList.add('slider-active');
        active = allElem[count];
        step = active.offsetWidth;
        
        if (count == 0) {
            next = allElem[count + 1];
        }
        else {
            next = allElem[count - 1];
        }

        let minusStep = next.offsetWidth;

        offset = offset - (step - minusStep + (pageWidth));
        offset = offset + pageWidth;
    }

    

    offset = offset + pageWidth;
    sliderLine.style.left = -offset + 'px';
    // console.log(offset);

});