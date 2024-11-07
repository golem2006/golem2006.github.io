let offset2 = 0;

const sliderLine2 = document.querySelector('.slider-line3');

const sliderItems2 = sliderLine2.childElementCount;
let count2 = 0;

sliderLine2.addEventListener('touchstart', handleTouchStart, false);
sliderLine2.addEventListener('touchmove', handleTouchMove, false);

let x1_2 = null;
let y1_2 = null;

function handleTouchStart(event) {
    const firstTouch_2 = event.touches[0];
    x1_2 = firstTouch_2.clientX;
    y1_2 = firstTouch_2.clientY;
}

function handleTouchMove(event) {
    if (!x1_2 || !y1_2) {
        return false;
    }
    let x2_2 = event.touches[0].clientX;
    let y2_2 = event.touches[0].clientY;

    let xDiff_2 = x2_2 - x1_2;
    let yDiff_2 = y2_2 - y1_2;

    if (Math.abs(xDiff_2) > Math.abs(yDiff_2)) {
        if (xDiff_2 < 0) {
            // left
            let active = "";
    let step = "";

    let pageWidth = document.body.offsetWidth;
    pageWidth *= 0.02;
    // вычисление отступов

    let allElem = sliderLine2.querySelectorAll('.count');

    

    let next = "";
    count2 += 1;
    if (count2 == sliderItems2) {
        // С помощью переменной count вычисляю активный и следующий слайд, применяю и забираю к ним стили
        allElem[count2 - 1].classList.remove('slider-active');

        count2 = 0;

        allElem[count2].classList.add('slider-active');
        active = allElem[count2];
        step = active.offsetWidth;
        
        next = allElem[count2 + 1];


        let minusStep = allElem[count2 + 1].offsetWidth;
        

        offset2 = step + pageWidth - ((sliderItems / 2) * minusStep);
        offset2 = offset2 - pageWidth;
        offset2= 0;
    }
    else {
        
        allElem[count2 - 1].classList.remove('slider-active');

        allElem[count2].classList.add('slider-active');
        active = allElem[count2];
        step = active.offsetWidth;
        
        if (count2 == 0) {
            next = allElem[count2 + 1];
        }
        else {
            next = allElem[count2 - 1];
        }

        let minusStep = next.offsetWidth;

        offset2 = offset2 + (step - minusStep - pageWidth);
    }

    
    offset2 = offset2 - pageWidth;
    sliderLine2.style.left = -offset2 + 'px';
        }
        else {
            // right
            let pageWidth = document.body.offsetWidth;
    let active = "";
    let step = "";

    pageWidth *= 0.02;

    let allElem = sliderLine2.querySelectorAll('.count');
    let next = "";
    count2 -= 1;
    if (count2 == -1) {
        
        allElem[count2 + 1].classList.remove('slider-active');

        count2 = sliderItems2 - 1;

        allElem[count2].classList.add('slider-active');
        active = allElem[count2];
        step = active.offsetWidth;

        next = allElem[count2 - 1];

        let minusStep = next.offsetWidth;

        offset2 = (step + pageWidth + minusStep);
        offset2 = offset2 + pageWidth * sliderItems2 + pageWidth * sliderItems2;
        
        
    }
    else {
        
        allElem[count2 + 1].classList.remove('slider-active');

        allElem[count2].classList.add('slider-active');
        active = allElem[count2];
        step = active.offsetWidth;
        
        if (count2 == 0) {
            next = allElem[count2 + 1];
        }
        else {
            next = allElem[count2 - 1];
        }

        let minusStep = next.offsetWidth;

        offset2 = offset2 - (step - minusStep + (pageWidth));
        offset2 = offset2 + pageWidth;
    }

    

    offset2 = offset2 + pageWidth;
    sliderLine2.style.left = -offset2 + 'px';
        }       
    }
    x1_2 = null;
    y1_2 = null;
}

// кнопка вперёд

document.querySelector('#leftthree').addEventListener('click', function () {
    
    let active = "";
    let step = "";

    let pageWidth = document.body.offsetWidth;
    pageWidth *= 0.02;
    // вычисление отступов

    let allElem = sliderLine2.querySelectorAll('.count');

    

    let next = "";
    count2 += 1;
    if (count2 == sliderItems2) {
        // С помощью переменной count вычисляю активный и следующий слайд, применяю и забираю к ним стили
        allElem[count2 - 1].classList.remove('slider-active');

        count2 = 0;

        allElem[count2].classList.add('slider-active');
        active = allElem[count2];
        step = active.offsetWidth;
        
        next = allElem[count2 + 1];


        let minusStep = allElem[count2 + 1].offsetWidth;
        

        offset2 = step + pageWidth - ((sliderItems / 2) * minusStep);
        offset2 = offset2 - pageWidth;
        offset2= 0;
    }
    else {
        
        allElem[count2 - 1].classList.remove('slider-active');

        allElem[count2].classList.add('slider-active');
        active = allElem[count2];
        step = active.offsetWidth;
        
        if (count2 == 0) {
            next = allElem[count2 + 1];
        }
        else {
            next = allElem[count2 - 1];
        }

        let minusStep = next.offsetWidth;

        offset2 = offset2 + (step - minusStep - pageWidth);
    }

    
    offset2 = offset2 - pageWidth;
    sliderLine2.style.left = -offset2 + 'px';
    
    // console.log(offset);
});

// кнопка назад

document.querySelector('#rightthree').addEventListener('click', function () {

    // if (offset >350) {
    //     offset= 0;
    // }

    let pageWidth = document.body.offsetWidth;
    let active = "";
    let step = "";

    pageWidth *= 0.02;

    let allElem = sliderLine2.querySelectorAll('.count');
    let next = "";
    count2 -= 1;
    if (count2 == -1) {
        
        allElem[count2 + 1].classList.remove('slider-active');

        count2 = sliderItems2 - 1;

        allElem[count2].classList.add('slider-active');
        active = allElem[count2];
        step = active.offsetWidth;

        next = allElem[count2 - 1];

        let minusStep = next.offsetWidth;

        offset2 = (step + pageWidth + minusStep);
        offset2 = offset2 + pageWidth * sliderItems2 + pageWidth * sliderItems2;
        
        
    }
    else {
        
        allElem[count2 + 1].classList.remove('slider-active');

        allElem[count2].classList.add('slider-active');
        active = allElem[count2];
        step = active.offsetWidth;
        
        if (count2 == 0) {
            next = allElem[count2 + 1];
        }
        else {
            next = allElem[count2 - 1];
        }

        let minusStep = next.offsetWidth;

        offset2 = offset2 - (step - minusStep + (pageWidth));
        offset2 = offset2 + pageWidth;
    }

    

    offset2 = offset2 + pageWidth;
    sliderLine2.style.left = -offset2 + 'px';
    // console.log(offset);

});