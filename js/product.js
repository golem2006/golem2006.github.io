const product = JSON.parse(localStorage.getItem('product'));
if (localStorage.getItem('backet') == null) {
    localStorage.setItem('backet', JSON.stringify([]));
}
console.log(product);
product.type = product.type === 'Shaving accessories' ? 'Бритвенные принадлежности'.toUpperCase() : product.type;
product.type = product.type === 'Care products' ? 'Средства для ухода'.toUpperCase() : product.type;
product.type = product.type === 'Accessories' ? 'Аксессуары'.toUpperCase() : product.type;
const stock = product.inStock === true ? ' enabled' : ' disabled';
product.inStock = product.inStock === true ? 'ЕСТЬ В НАЛИЧИИ' : 'НЕТ В НАЛИЧИИ';
const mainContent = `<section class="product-details">
<h1 class="product-title">${product.name}</h1>
<nav class="breadcrumbs">
    <a href="index.html">ГЛАВНАЯ</a>
    <span class="separator">&#9670;</span>
    <a href="shop.html">МАГАЗИН</a>
    <span class="separator">&#9670;</span>
    <a href="#">${product.type}</a>
    <span class="separator">&#9670;</span>
    <span class="current-page">${product.altText.toUpperCase()}</span>
</nav>

<div class="product-content">
    <div class="product-images">
        <img src="${product.imageUrl}" alt="Набор для путешествий Baxter of California"
            class="main-image">
        <div class="thumbnail-images">
            <img src="${product.imageUrl}" alt="Набор для путешествий Baxter of California"
                class="thumbnail">
            <img src="${product.imageUrl}" alt="Набор для путешествий Baxter of California"
                class="thumbnail">
            <img src="${product.imageUrl}" alt="Набор для путешествий Baxter of California"
                class="thumbnail">
        </div>
    </div>

    <div class="product-info">
        <div class="availability">
            <span>${product.inStock}</span>
            <span class="article">АРТИКУЛ: ${product.article}</span>
        </div>

        <p class="description">${product.description}</p>

        <div class="price-buy">
            <p class="price">${product.price} ₽</p>
            <button id="buyProduct" class="buy-button" ${stock}>КУПИТЬ</button>
        </div>

        <div class="includes">
            <h3>В НАБОР ВХОДЯТ:</h3>
            <ul>
                <li>&#9670; ${product.name}</li>
            </ul>
        </div>
    </div>
</div>
</section>`;

document.getElementById('main').innerHTML = mainContent;

// Функция для добавления товара в корзину
function buyProduct(productToAdd) { // Принимаем объект товара как аргумент
    if (!productToAdd || !productToAdd.article || !productToAdd.inStock) {
        console.error("Не передан объект продукта или отсутствует артикул или его нет на складе.");
        return;
    }

    let basket = getBasket();

    // Ищем товар в корзине по артикулу
    const existingProductIndex = basket.findIndex(item => item.article === productToAdd.article);

    if (existingProductIndex > -1) {
        // Если товар уже есть, увеличиваем количество
        basket[existingProductIndex].count++;
    } else {
        // Если товара нет, добавляем его с количеством 1
        const newProduct = {
            article: productToAdd.article,
            name: productToAdd.altText, // предполагаем, что product.altText это название
            price: productToAdd.price,
            count: 1 // Начинаем с 1
        };
        basket.push(newProduct);
    }

    saveBasket(basket);
    renderBasketContent(); // Перерисовываем контент корзины
}

document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.getElementById('buyProduct');
    if (buyButton) {
        // Если кнопка существует, добавляем слушатель
        buyButton.addEventListener('click', function() {
            buyProduct(product);
        });
    }
});

/* <div class="includes"> НАБОР ДЛЯ ПУТЕШЕСТВИЙ
    <h3>В НАБОР ВХОДЯТ:</h3>
    <ul>
        <li>&#9670; &nbsp; &nbsp; СРЕДСТВО ДЛЯ УМЫВАНИЯ (50 МЛ)</li>
        <li>&#9670; &nbsp; &nbsp; УВЛАЖНЯЮЩИЙ КРЕМ (50 МЛ)</li>
        <li>&#9670; &nbsp; &nbsp; КРЕМ ДЛЯ БРИТЬЯ (50 МЛ)</li>
        <li>&#9670; &nbsp; &nbsp; КРЕМ ПОСЛЕ БРИТЬЯ, ШАМПУНЬ (50 МЛ)</li>
        <li>&#9670; &nbsp; &nbsp; УДОБНАЯ КОЖАНАЯ КОСМЕТИЧКА</li>
    </ul>
</div> */

