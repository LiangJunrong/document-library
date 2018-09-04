import $ from 'jquery';
import getCart from '../ShoppingCart/GetCart.js';

export default class Item {
    constructor(list, data) {
        this.list = list;
        this.data = data;
        this.$el = $('<div>');
        this.cart = getCart();
    }

    initContent() {
        let $el = this.$el;
        let data = this.data;
        $el.append($(`<p>名称：${data.name}</p>`));
        $el.append($(`<p>价格：${data.name}</p>`));
    }

    initBtn() {
        let $el = this.$el;
        let $btn = $('<button>test</button>');

        $btn.click(() => {
            // 添加到购物车
            // 从购物车移除
        })

        $el.append($btn);
    }

    // 添加到购物车
    addToCartHandle() {
        this.cart.add(this.data);
    }

    // 从购物车删除
    deleteFromCartHandle() {
        this.cart.del(this.data.id);
    }

    render() {
        this.list.$el.append(this.$el);
    }

    init() {
        this.initContent();
        this.initBtn();
        this.render();
    }
}