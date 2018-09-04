import Item from './Item.js'

// 补充：优惠商品的处理逻辑

// 工厂函数
export default function(list, itemData) {
    return new Item(list, itemData);
}