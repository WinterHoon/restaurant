import { restaurant } from './app';
import { Employee } from './Employee';
let Waiter = (function(){
    let instance;
    return class extends Employee {
        constructor(name, salary) {
            if (!instance) {
                super(name, salary);
                instance = this;
            }
            return instance;
        }

        doWorking() {
            //console.log(restaurant.customerQueueIn);
            if (restaurant.customerQueueIn.length > 0) {
                let customer = restaurant.customerQueueIn[0];
                if (customer.state === 1) {
                    console.log(`工号${this.id}服务员前来服务`);
                    let meal = customer.orderMeal();
                    restaurant.mealToCook.push(meal);
                    customer.state = 3;
                    console.log(`顾客${customer.name}点了${meal.name},等待上菜`);
                }
                if (restaurant.mealDone.length > 0 && customer.state === 3) {
                    console.log(`顾客${customer.name}的${restaurant.mealDone.shift().name}已上菜，请用餐`);
                    customer.eat();
                }
            }
            setTimeout(() => {
                this.doWorking();
            }, 1000);
        }
    }
})();

export { Waiter };
