'use strict';
const goods = [ // Товары
    { title: 'Пулемет', price: 22000 },
    { title: 'Батон', price: 65 },
    { title: 'Лопата', price: 900 },
    { title: 'Бутерброд', price: 50 },
    { title: 'Колготки', price: 85 },
    { title: 'Миксер', price: 950 },
    { title: 'Молоток', price: 350 },
    { title: 'Фломастер', price: 50 },
    { title: 'Кнопки', price: 65 },
    { title: 'Апельсин', price: 50 },
    { title: 'Верстак', price: 2500 },
    { title: 'Стакан', price: 50 },
];
console.log(goods);

const renderGoodsItem = (title = 'Наименование', price = 0) => { // Разметка единицы товара
    return `<div class = "goods-item"><h3>${title}</h3><p>${price}</p></div>`
};

const renderGoodsList = (list) => { // Вывод списка товаров
    let goodsListComma = list.map(item => renderGoodsItem(item.title || 'Буква', item.price || 1));
    let goodsList = goodsListComma.join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
    console.log(goodsList);
};
renderGoodsList(goods);