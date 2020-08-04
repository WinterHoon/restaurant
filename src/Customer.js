import { restaurant, menu } from './app'; 
import { random } from './public-use';
class Customer {
    constructor(lastName, firstName) {
        this.name = lastName + firstName;
        this.state = 0;
    }

    waitToOrder() {
        this.state = 1;
        console.log(`顾客${this.name}正在等待点餐`);
    }
    orderMeal() {
        this.state = 2;
        console.log(`顾客${this.name}正在点餐`);
        return random(menu.mealList);
    }

    eat() {
        this.state = 4;
        console.log(`顾客${this.name}正在就餐……`);
        setTimeout(() => {
            this.finishEating();
        }, Math.floor(Math.random() * 5000));
    }

    finishEating() {
        //吃完要结账，但目前先设定成吃完就走
        console.log(`顾客${this.name}就餐完毕，离开`);
        restaurant.customerQueueIn.shift();
    }
    // //私有的随机点菜方法
    // _randomOrderMeal() {
    //     let randomNum = Math.floor(Math.random() * (menu.mealList.length - 1));
    //     return menu.mealList[randomNum];
    // }
}

export { Customer };


