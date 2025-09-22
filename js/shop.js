
const productsData = [
  {
    id: 1,
    imageUrl: 'images/product1.jpg',
    altText: 'Набор для путешествий Baxter of California',
    name: 'Набор для путешествий <br>"BAXTER OF CALIFORNIA"',
    price: 2900,
    buyUrl: 'products/product1.html',
    producer: 'BAXTER OF CALIFORNIA',
    type: 'Accessories',
    description: 'Необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке найдется все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха.',
    inStock: true,
    article: 'BXC-TRV-001'
  },
  {
    id: 2,
    imageUrl: 'images/product2.jpg',
    altText: 'Увлажняющий кондиционер Baxter of California',
    name: 'Увлажняющий кондиционер <br>"BAXTER OF CALIFORNIA"',
    price: 750,
    buyUrl: 'products/product1.html',
    producer: 'BAXTER OF CALIFORNIA',
    type: 'Care products',
    description: 'Кондиционер с натуральными ингредиентами увлажняет и питает волосы, делая их мягкими и послушными. Подходит для ежедневного использования.',
    inStock: true,
    article: 'BXC-CND-002'
  },
  {
    id: 3,
    imageUrl: 'images/product3.jpg',
    altText: 'Гель для волос Suavecito',
    name: 'Гель для волос <br>"SUAVECITO"',
    price: 290,
    buyUrl: 'products/product1.html',
    producer: 'SUAVECITO',
    type: 'Care products',
    "description": "Классический гель для волос с сильной фиксацией и приятным ароматом. Легко наносится и смывается, не оставляет следов.",
    inStock: true,
    article: 'SUA-GEL-003'
  },
  {
    id: 4,
    imageUrl: 'images/product4.jpg',
    altText: 'Глина для укладки волос American Crew',
    name: 'Глина для укладки волос <br>"AMERICAN CREW"',
    price: 500,
    buyUrl: 'products/product1.html',
    producer: 'AMERICAN CREW',
    type: 'Care products',
    description: 'Глина для волос с матовым эффектом и средней фиксацией. Идеальна для создания текстурных причесок и естественного вида.',
    inStock: true,
    article: 'AMC-CLY-004'
  },
  {
    id: 5,
    imageUrl: 'images/product5.jpg',
    altText: 'Гель для волос American Crew',
    name: 'Гель для волос <br>"AMERICAN CREW"',
    price: 300,
    buyUrl: 'products/product1.html',
    producer: 'AMERICAN CREW',
    type: 'Care products',
    description: 'Гель для волос с сильной фиксацией, придающий волосам блеск и объем. Подходит для создания гладких и структурированных причесок.',
    inStock: false,
    article: 'AMC-GLS-005'
  },
  {
    id: 6,
    imageUrl: 'images/product6.jpg',
    altText: 'Набор для бритья AMERICAN CREW',
    name: 'Набор для бритья <br>"AMERICAN CREW"',
    price: 3900,
    buyUrl: 'products/product1.html',
    producer: 'AMERICAN CREW',
    type: 'Shaving accessories',
    description: 'Полный набор для комфортного и качественного бритья. Включает в себя бритву, крем для бритья, бальзам после бритья и кисточку.',
    inStock: true,
    article: 'AMC-SHV-006'
  },
  {
    id: 7,
    imageUrl: 'images/заглушка.jpg',
    altText: 'Парфюмерная вода Malin+Goetz',
    name: 'Парфюмерная вода <br>"Malin+Goetz"',
    price: 3500,
    buyUrl: 'products/product1.html',
    producer: 'Malin+Goetz',
    type: 'Accessories',
    description: 'Уникальный аромат, сочетающий в себе свежие и древесные ноты. Подчеркнет вашу индивидуальность и придаст уверенности.',
    inStock: false,
    article: 'MNG-PRF-007'
  },
  {
    id: 8,
    imageUrl: 'images/заглушка.jpg',
    altText: 'Масло для бороды Mr Natty',
    name: 'Масло для бороды <br>"Mr Natty"',
    price: 950,
    buyUrl: 'products/product1.html',
    producer: 'Mr Natty',
    type: 'Shaving accessories',
    description: 'Уникальный аромат, сочетающий в себе свежие и древесные ноты. Подчеркнет вашу индивидуальность и придаст уверенности.',
    inStock: false,
    article: 'MNG-PRF-008'
  },
  {
    id: 9,
    imageUrl: 'images/заглушка.jpg',
    altText: 'Бальзам для губ Murray\'s',
    name: 'Бальзам для губ <br>"Murray\'s"',
    price: 450,
    buyUrl: 'products/product1.html',
    producer: 'Murray\'s',
    type: 'Care products',
    description: 'Уникальный аромат, сочетающий в себе свежие и древесные ноты. Подчеркнет вашу индивидуальность и придаст уверенности.',
    inStock: false,
    article: 'MNG-PRF-009'
  },
  {
    id: 10,
    imageUrl: 'images/заглушка.jpg',
    altText: 'Набор для бритья Suavecito',
    name: 'Набор для бритья <br>"Suavecito"',
    price: 2500,
    buyUrl: 'products/product1.html',
    producer: 'Suavecito',
    type: 'Shaving accessories',
    description: 'Уникальный аромат, сочетающий в себе свежие и древесные ноты. Подчеркнет вашу индивидуальность и придаст уверенности.',
    inStock: false,
    article: 'MNG-PRF-010'
  },
  {
    id: 11,
    imageUrl: 'images/заглушка.jpg',
    altText: 'Бальзам для губ Baxter of California',
    name: 'Бальзам для губ <br>"Baxter of California"',
    price: 666,
    buyUrl: 'products/product1.html',
    producer: 'Baxter of California',
    type: 'Care products',
    description: 'Уникальный аромат, сочетающий в себе свежие и древесные ноты. Подчеркнет вашу индивидуальность и придаст уверенности.',
    inStock: false,
    article: 'MNG-PRF-011'
  },
  {
    id: 11,
    imageUrl: 'images/заглушка.jpg',
    altText: 'Бальзам для ушей Baxter of California',
    name: 'Бальзам для ушей <br>"Baxter of California"',
    price: 666,
    buyUrl: 'products/product1.html',
    producer: 'Baxter of California',
    type: 'Care products',
    description: 'Уникальный аромат, сочетающий в себе свежие и древесные ноты. Подчеркнет вашу индивидуальность и придаст уверенности.',
    inStock: false,
    article: 'MNG-PRF-012'
  }
];

var groupSize = 6;

function sliceGroup(enterArr) {
  let groups = [];
  for (let i = 0; i < enterArr.length; i += groupSize) {
    groups.push(enterArr.slice(i, i + groupSize));
  }
  return groups;
}
var groups = sliceGroup(productsData);
console.log(groups);
var groupIndex = 0;
var groupArray = groups[groupIndex];

function renderCards(group) {
    let res = '';
    group.forEach(card => {
        res += `<div class="product-card">
                    <img src="${card.imageUrl}" alt="${card.altText}">
                    <div class="product-card-bottom">
                        <h3>${card.name}</h3>
                        <div class="flexRow">
                            <p>${card.price} ₽</p>
                           <a href="#" id="${card.article}">КУПИТЬ</a>
                        </div>
                    </div>
                </div>`;
    });
    document.getElementById('cards').innerHTML = res;
}

function renderPagination(groups) {
    let res = '';
    let index = 0;
    let clas = '';
    groups.forEach(group => {
      if (index == groupIndex) {
        clas = 'class="pagination-active"';
      }
      res += `<a href="#" ${clas} id="page${index}">${index + 1}</a>`;
      index++;
      clas = '';
    });
    document.getElementById('pagination').innerHTML = res;
}

document.getElementById('pagination').addEventListener('click', function (event) {
  let elems = document.getElementById('pagination').childNodes;
  for (let i = 0; i < elems.length; i++) {
    if (elems[i] === event.target) {
      groupIndex = i;
    }
  }
  event.preventDefault();
  groupArray = groups[groupIndex];
  renderCards(groupArray);
  renderPagination(groups);
});

const shopFilter = document.getElementById('shopFilter');
function getSelectedFilters() {
  const selectedFilters = {
    producers: [],
    type: ''
  };

  // Получаем выбранные производители (чекбоксы)
  const producerCheckboxes = shopFilter.querySelectorAll('input[type="checkbox"]:checked');
  producerCheckboxes.forEach(checkbox => {
    selectedFilters.producers.push(checkbox.value);
  });

  // Получаем выбранную группу товаров (радиокнопка)
  const productGroupRadio = shopFilter.querySelector('input[type="radio"][name="product-group"]:checked');
  if (productGroupRadio) {
    selectedFilters.type = productGroupRadio.value;
  }

  return selectedFilters;
}

function filterProducts(products, filters) {
  let filtered = products;

  // Фильтр по производителю
  if (filters.producers.length > 0) {
    filtered = filtered.filter(product => filters.producers.some(producer => product.producer.toUpperCase() === producer.toUpperCase()));
  }

  // Фильтр по типу товара
  if (filters.type) {
    filtered = filtered.filter(product => product.type.toUpperCase() === filters.type.toUpperCase());
  }

  return filtered;
}

function renderCrumbs(...elements) { // Генерация хлебных крошек
  let res = `<a href="index.html">ГЛАВНАЯ</a>
  <span class="separator">&#9670;</span>
  <a href="#">МАГАЗИН</a>`;

  if (elements && elements.length > 0) {
    let max = elements.length;
    let index = 0;
    let clas = '';
    elements.forEach(element => {
      if (index == max - 1) {
        clas = `class="current-page"`;
      }
      element = element === 'Shaving accessories' ? 'Бритвенные принадлежности'.toUpperCase() : element;
      element = element === 'Care products' ? 'Средства для ухода'.toUpperCase() : element;
      element = element === 'Accessories' ? 'Аксессуары'.toUpperCase() : element;
      res += `<span class="separator">&#9670;</span>
      <span ${clas}>${element}</span>`;
    });
  }
  document.getElementById('breadcrumbs').innerHTML = res;
}

function renderProductPage(article) {
  const product = productsData.find(product => product.article === article);
  console.log(product);
  return product;
}

// Описание товара
document.getElementById('cards').addEventListener('click', function (event) {
  if(event.target.tagName.toLowerCase() === 'a') {
    event.preventDefault();
    product = renderProductPage(event.target.id);
    
    localStorage.setItem('product', JSON.stringify(product));
    window.location.href = 'product.html';
  }
})

document.getElementById('shopFilter').addEventListener('click', function () {
  selectedFilters = getSelectedFilters();
  filteredProducts = filterProducts(productsData, selectedFilters);
  groups = sliceGroup(filteredProducts);
  groupIndex = 0;
  groupArray = groups[groupIndex];
  renderCards(groupArray);
  renderPagination(groups);
  renderCrumbs(selectedFilters.type);
});

var selectedFilters = getSelectedFilters();
var filteredProducts = filterProducts(productsData, selectedFilters);
groups = sliceGroup(filteredProducts);
groupIndex = 0;
groupArray = groups[groupIndex];
renderCards(groupArray);
renderPagination(groups);
renderCrumbs(selectedFilters.type);