import { restaurant } from "./app";
import { Employee } from './Employee';
var Cook = (function(){
    let instance;
    return class extends Employee {
        constructor(name,salary) {
            if (!instance) {
                super(name,salary);
                instance = this;
            }
            return instance;
        }

        doWorking() {
            //console.log(restaurant.mealToCook);
            if (restaurant.mealToCook.length > 0) {
                let meal = restaurant.mealToCook.shift();
                setTimeout(() => {
                    restaurant.mealDone.push(meal);
                    console.log(`${meal.name}完成，请上菜`);
                }, meal.time * 1000);
            }
            setTimeout(() => {
                this.doWorking();
            }, 1000);
        }
    }
})();

export { Cook };