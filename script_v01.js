'use strict';

class GoodsItem { // Единица товара
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() { // 
        return `<div class = "goods-item"><h3>${this.title}</h3><button class='add-2-basket-button' type='button'>+</button><p>${this.price}</p></div>`
    }
}

class GoodsList { // Список товаров
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [ // Товары
            { goodId: 1001, title: 'Пулемет', price: 22000 },
            { goodId: 1002, title: 'Батон', price: 65 },
            { goodId: 1003, title: 'Лопата', price: 900 },
            { goodId: 1004, title: 'Бутерброд', price: 50 },
            { goodId: 1005, title: 'Колготки', price: 85 },
            { goodId: 1006, title: 'Миксер', price: 950 },
            { goodId: 1007, title: 'Молоток', price: 350 },
            { goodId: 1008, title: 'Фломастер', price: 50 },
            { goodId: 1009, title: 'Кнопки', price: 65 },
            { goodId: 1010, title: 'Апельсин', price: 50 },
            { goodId: 1011, title: 'Верстак', price: 2500 },
            { goodId: 1012, title: 'Стакан', price: 50 },
        ];
        console.log(this.goods);
    }
    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
            // console.log(listHtml);
            document.querySelector('.goods-list').innerHTML = listHtml;
        })
    }
    sum() {
        let goodsSum = 0;
        this.goods.forEach((good) => {
            // console.log(good.price);
            goodsSum += good.price;
        })
        return goodsSum;
    }
}


class BasketItem { // Элемент корзины
    constructor(id, quantity) {}

}

class BasketContent { // Корзина
    constructor() {}
}

// ---------------

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.sum());