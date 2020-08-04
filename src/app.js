import { Menu } from './Menu';
import { Meal } from './Meal';
import { Restaurant } from './Restaurant';
import { Customer } from './Customer';
import { random } from './public-use';
import { Waiter } from './Waiter';
import { Cook } from './Cook';
let restaurant = new Restaurant({cash: 10000, seats: 1});
let menu = new Menu();
let meals = [
    {name: "红烧肉", cost: 10, price: 30, time: 6},
    {name: "糖醋排骨", cost: 12, price: 35, time: 4}, 
    {name: "可乐鸡翅", cost: 8, price: 25, time: 2},
    {name: "鱼香肉丝", cost: 8, price: 20, time: 2},
    {name: "水煮鱼", cost: 30, price: 80, time: 4},
    {name: "口水鸡", cost: 12, price: 32, time: 1},
    {name: "鸡蛋西红柿", cost: 4, price: 12, time: 2},
    {name: "酸辣土豆丝", cost: 3, price: 10, time: 1},
    {name: "鱼香茄子", cost: 3, price: 12, time: 2},
    {name: "小鸡炖蘑菇", cost: 5, price: 24, time: 3}

]
for (let meal of meals) {
    let newMeal = new Meal(meal);
    menu.addMeal(newMeal);
}

let lastNames = ["赵","钱","孙","李","周","吴","郑","王","冯","陈","褚","卫","蒋","沈","韩","杨"];
let firstNames = ["彪","巨昆","锐","花","小小","撒撒", "萧", "慕", "紫韵", "娜", "怜花", "月", "风", "云", "霜", "伟", "岩"];

window.onload = function(){
//1-5秒随机来客人
setInterval(() => {
    let customer = new Customer(random(lastNames), random(firstNames));
    if (restaurant.customerQueueOut.length < 10) {
        restaurant.addCustomer(customer);
        //console.log(`有顾客${customer.name}到来，当前店外人数${restaurant.customerQueueOut.length}`);
        for (let customer of restaurant.customerQueueOut) {
            console.log(customer.name);
        }
    } else {
        //console.log("厅外等待人数已满10人，请顾客下次再来。");
    }
    
    //console.log(`当前厅内顾客为${restaurant.customerQueueIn[0].name}`);
}, Math.floor(Math.random() * 5000));

let waiter = new Waiter("翠花", 3000);
let cook = new Cook("王刚",15000);
restaurant.hire(waiter);
restaurant.hire(cook);
waiter.doWorking();
cook.doWorking();
};


export { restaurant, menu };