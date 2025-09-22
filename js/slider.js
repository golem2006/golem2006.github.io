document.addEventListener('DOMContentLoaded', function() {
    const sliderImage = document.getElementById('sliderImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    // Массив с путями к изображениям вашего слайдера
    const images = [
        'images/slider.jpg',
        'images/slider1.jpg', // Добавьте пути к другим изображениям
        'images/рябчик.jpg',
        // ...
    ];
    
    let currentImageIndex = 0;
    
    // Функция для обновления изображения в слайдере
    function updateSliderImage() {
        sliderImage.src = images[currentImageIndex];
        sliderImage.alt = `Изображение слайдера ${currentImageIndex + 1}`; // Обновляем alt текст
        if (images[currentImageIndex] == 'images/рябчик.jpg') {
            sliderImage.title = 'Рябчик';
        } else {
            sliderImage.title = '';
        }
    }

    // Обработчик для кнопки "ВПЕРЁД"
    nextButton.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0; // Возвращаемся к первому изображению, если достигли конца
        }
        updateSliderImage();
    });

    // Обработчик для кнопки "НАЗАД"
    prevButton.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1; // Возвращаемся к последнему изображению, если достигли начала
        }
        updateSliderImage();
    });

    // Инициализация слайдера при загрузке страницы
    updateSliderImage();
});