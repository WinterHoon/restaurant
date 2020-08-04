import { restaurant } from "./app";

class Employee {
    constructor(name,salary) {
        //用一个全局的id变量来保存id？
        this.id = '00' + (restaurant.staff.length + 1);
        this.name = name;
        this.salary = salary;
    }

    doWorking() {}
}

export { Employee };