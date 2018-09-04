class Cart {
    constructor() {
        this.list = [];
    }

    add(data) {
        this.list.push(data);
    }

    del(id) {
        this.list = this.list.filter(item => {
            if(item.id === id) {
                return false;
            }
            return true;
        })
    }

    getList() {
        return this.list.map(item => {
            return item.name;
        }).join('\n');
    }
}

// 返回单例
let getCart = (function() {
    let cart;
    return function() {
        if(!cart) {
            cart = new Cart();
        }
        return cart;
    }
})()

export default getCart;