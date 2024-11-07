let offset1 = 0;

const sliderLine1 = document.querySelector('.slider-line2');

const sliderItems1 = sliderLine1.childElementCount;
let count1 = 0;

pageWidth = document.body.offsetWidth;

active = "";
step = "";

sliderLine1.addEventListener('touchstart', handleTouchStart, false);
sliderLine1.addEventListener('touchmove', handleTouchMove, false);

let x1_1 = null;
let y1_1 = null;

function handleTouchStart(event) {
    const firstTouch_1 = event.touches[0];
    x1_1 = firstTouch_1.clientX;
    y1_1 = firstTouch_1.clientY;
}

function handleTouchMove(event) {
    if (!x1_1 || !y1_1) {
        return false;
    }
    let x2_1 = event.touches[0].clientX;
    let y2_1 = event.touches[0].clientY;

    let xDiff_1 = x2_1 - x1_1;
    let yDiff_1 = y2_1 - y1_1;

    if (Math.abs(xDiff_1) > Math.abs(yDiff_1)) {
        if (xDiff_1 < 0) {
            console.log("left");
            pageWidth = document.body.offsetWidth;
            pageWidth *= 0.02;
            // вычисление отступов

            let allElem = sliderLine1.querySelectorAll('.count');

    

            let next = "";
            count1 += 1;
            if (count1 == sliderItems1) {
                // С помощью переменной count вычисляю активный и следующий слайд, применяю и забираю к ним стили
                allElem[count1 - 1].classList.remove('slider-active');
            
                count1 = 0;
            
                allElem[count1].classList.add('slider-active');
                active = allElem[count1];
                step = active.offsetWidth;

                next = allElem[count1 + 1];
            
            
                let minusStep = allElem[count1 + 1].offsetWidth;

            
                offset1 = step + pageWidth - ((sliderItems1 / 2) * minusStep);
                offset1 = offset1 - pageWidth;
                offset1= 0;
            }
            else {

                allElem[count1 - 1].classList.remove('slider-active');
            
                allElem[count1].classList.add('slider-active');
                active = allElem[count1];
                step = active.offsetWidth;

                if (count1 == 0) {
                    next = allElem[count1 + 1];
                }
                else {
                    next = allElem[count1 - 1];
                }
            
                let minusStep = next.offsetWidth;
            
                offset1 = offset1 + (step - minusStep - pageWidth);
            }
        

            offset1 = offset1 - pageWidth;
            sliderLine1.style.left = -offset1 + 'px';
        }
        else {
                console.log("right");
    pageWidth = document.body.offsetWidth;
    active = "";
    step = "";

    pageWidth *= 0.02;

    let allElem = sliderLine1.querySelectorAll('.count');
    let next = "";
    count1 -= 1;
    if (count1 == -1) {
        
        allElem[count1 + 1].classList.remove('slider-active');

        count1 = sliderItems1 - 1;

        allElem[count1].classList.add('slider-active');
        active = allElem[count1];
        step = active.offsetWidth;

        next = allElem[count1 - 1];

        let minusStep = next.offsetWidth;

        offset1 = (step + pageWidth + minusStep);
        offset1 = offset1 + pageWidth * sliderItems1;
        
        
    }
    else {
        
        allElem[count1 + 1].classList.remove('slider-active');

        allElem[count1].classList.add('slider-active');
        active = allElem[count1];
        step = active.offsetWidth;
        
        if (count1 == 0) {
            next = allElem[count1 + 1];
        }
        else {
            next = allElem[count1 - 1];
        }

        let minusStep = next.offsetWidth;

        offset1 = offset1 - (step - minusStep + (pageWidth));
        offset1 = offset1 + pageWidth;
    }

    

    offset1 = offset1 + pageWidth;
    sliderLine1.style.left = -offset1 + 'px';
        }       
    }
    x1_1 = null;
    y1_1 = null;
}

            // кнопка вперёд

            document.querySelector('#lefttwo').addEventListener('click', function () {
            console.log("true");

            active = "";
            step = "";

            pageWidth = document.body.offsetWidth;
            pageWidth *= 0.02;
            // вычисление отступов

            let allElem = sliderLine1.querySelectorAll('.count');



            let next = "";
            count1 += 1;
            if (count1 == sliderItems1) {
                // С помощью переменной count вычисляю активный и следующий слайд, применяю и забираю к ним стили
                allElem[count1 - 1].classList.remove('slider-active');
            
                count1 = 0;
            
                allElem[count1].classList.add('slider-active');
                active = allElem[count1];
                step = active.offsetWidth;

                next = allElem[count1 + 1];
            
            
                let minusStep = allElem[count1 + 1].offsetWidth;

            
                offset1 = step + pageWidth - ((sliderItems1 / 2) * minusStep);
                offset1 = offset1 - pageWidth;
                offset1= 0;
            }
    else {
        
        allElem[count1 - 1].classList.remove('slider-active');

        allElem[count1].classList.add('slider-active');
        active = allElem[count1];
        step = active.offsetWidth;
        
        if (count1 == 0) {
            next = allElem[count1 + 1];
        }
        else {
            next = allElem[count1 - 1];
        }

        let minusStep = next.offsetWidth;

        offset1 = offset1 + (step - minusStep - pageWidth);
    }

    
    offset1 = offset1 - pageWidth;
    sliderLine1.style.left = -offset1 + 'px';
    
    // console.log(offset);
});

// кнопка назад

document.querySelector('#righttwo').addEventListener('click', function () {

    // if (offset >350) {
    //     offset= 0;
    // }

    pageWidth = document.body.offsetWidth;
    active = "";
    step = "";

    pageWidth *= 0.02;

    let allElem = sliderLine1.querySelectorAll('.count');
    let next = "";
    count1 -= 1;
    if (count1 == -1) {
        
        allElem[count1 + 1].classList.remove('slider-active');

        count1 = sliderItems1 - 1;

        allElem[count1].classList.add('slider-active');
        active = allElem[count1];
        step = active.offsetWidth;

        next = allElem[count1 - 1];

        let minusStep = next.offsetWidth;

        offset1 = (step + pageWidth + minusStep);
        offset1 = offset1 + pageWidth * sliderItems1;
        
        
    }
    else {
        
        allElem[count1 + 1].classList.remove('slider-active');

        allElem[count1].classList.add('slider-active');
        active = allElem[count1];
        step = active.offsetWidth;
        
        if (count1 == 0) {
            next = allElem[count1 + 1];
        }
        else {
            next = allElem[count1 - 1];
        }

        let minusStep = next.offsetWidth;

        offset1 = offset1 - (step - minusStep + (pageWidth));
        offset1 = offset1 + pageWidth;
    }

    

    offset1 = offset1 + pageWidth;
    sliderLine1.style.left = -offset1 + 'px';
    // console.log(offset);

});