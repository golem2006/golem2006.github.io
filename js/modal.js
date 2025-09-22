const modalsID = ['modal1', 'modal2'];

function open(id) {
    // Закрываем все открытые модальные окна
    modalsID.forEach(modalId => {
        const modalElement = document.getElementById(modalId);
        if (modalElement && modalElement.style.display === 'flex') {
            modalElement.style.display = 'none';
        }
    });

    // Открываем нужное модальное окно
    const targetModal = document.getElementById(id);
    if (targetModal) {
        targetModal.style.display = 'flex';
    }
}

function close(id) {
    document.getElementById(id).style.display = 'none';
}

function bodyClickListener(event) {
    let modal = null;
    let id = '';
    if (document.getElementById('modal1').style.display == 'flex') {
        modal = document.getElementById('modal1');
        id = 'modal1';
    } else if (document.getElementById('modal2').style.display == 'flex') {
        modal = document.getElementById('modal2');
        id = 'modal2';
    }
    
    if (modal && modal.style.display === 'flex' && !modal.contains(event.target) && event.target.id !== 'close1' && event.target.id !== 'close2') {
        close(id);
    }
}

// Вспомогательная функция для получения данных из localStorage
function getBasket() {
    try {
        const basketData = localStorage.getItem('backet');
        return JSON.parse(basketData);
    } catch (e) {
        console.error("Ошибка при парсинге данных корзины из localStorage:", e);
        // Если данные повреждены, инициализируем заново
        localStorage.setItem('backet', JSON.stringify([]));
        return [];
    }
}

// Функция для удаления товара из корзины
function removeProduct(articleToRemove) {
    let basket = getBasket();
    const productIndex = basket.findIndex(item => item.article === articleToRemove);

    if (productIndex > -1) { // Если товар найден в корзине
        const currentProduct = basket[productIndex];

        if (currentProduct.count > 1) {
            // Если количество больше 1, просто уменьшаем его
            currentProduct.count--;
        } else {
            // Если количество равно 1, удаляем товар полностью
            basket.splice(productIndex, 1); // Удаляем элемент из массива по индексу
        }

        saveBasket(basket);
        renderBasketContent(); // Обновляем отображение корзины
    }
    // Если товар не найден, ничего не делаем
}

// Вспомогательная функция для сохранения данных в localStorage
function saveBasket(basket) {
    localStorage.setItem('backet', JSON.stringify(basket));
}

// Функция для отрисовки содержимого корзины
function renderBasketContent() {
    const basket = getBasket();
    let totalPrice = 0;
    let itemsToRender = '';

    const basketCountSpan = document.getElementById('basketCount');

    // Обновляем содержимое span
    if (basketCountSpan) {
        const count = basket.length; 
        basketCountSpan.textContent = count;
        basketCountSpan.setAttribute('data-count', count); // Для стилей

        if (count === 0) {
            basketCountSpan.style.display = 'none'; // Скрываем, если 0
        } else {
            basketCountSpan.style.display = 'flex'; // Показываем, если больше 0
        }
    }

    if (basket.length === 0) {
        itemsToRender = '<p>Ваша корзина пуста.</p>';
    } else {
        basket.forEach(item => {
            const itemTotalPrice = item.price * item.count;
            totalPrice += itemTotalPrice;
            itemsToRender += `
                <div class="item">
                    <span class="round">${item.count} шт.</span>
                    ${item.name} ${item.price} ₽
                    <img class="delete-item" id="delete-${item.article}" src="images/Trash Icon.svg" alt="Удалить">
                </div>`;
        });
    }

    // Формируем остальную часть корзины (форма, кнопка)
    const formPart = `
        <form class="price-buy" name="buyBacket" method="post">
            <input type="hidden" name="basket" value='${JSON.stringify(basket)}'> <!-- Сохраняем JSON-строку -->
            <p class="price">Итого: ${totalPrice} ₽</p>
            <input class="buy-button" type="submit" value="КУПИТЬ">
        </form>`;

    document.getElementById('basketContent').innerHTML = itemsToRender + formPart;

    // Добавляем обработчики на кнопки удаления после отрисовки
    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const article = this.id.replace('delete-', ''); // Получаем артикул из ID
            removeProduct(article);
        });
    });
}

document.getElementById('basket').addEventListener('click', function(event) {
    event.stopPropagation();
    open('modal1');
});

document.getElementById('close1').addEventListener('click', function(event) {
    event.stopPropagation();
    close('modal1');
});

document.getElementById('enter').addEventListener('click', function(event) {
    event.stopPropagation();
    open('modal2');
});

document.getElementById('close2').addEventListener('click', function(event) {
    event.stopPropagation();
    close('modal2');
});

document.body.addEventListener('click', bodyClickListener);

document.addEventListener('DOMContentLoaded', renderBasketContent);