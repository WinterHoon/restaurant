function Restaurant(restaurant) {
    this.cash = restaurant.cash;
    this.seats = restaurant.seats;
    this.staff = restaurant.staff;
}

Restaurant.prototype.hire = function(employee) {
    this.staff.push(employee);
};

Restaurant.prototype.fire = function(employee) {
    for (let i = 0; i < this.staff.length; i++) {
        if (this.staff[i].name === employee.name) {
            this.staff.splice(i,1);
            break;
        }
    }
};

function Employee(name, salary, id) {
    this.name = name;
    this.salary = salary;
    this.id = id;
}

Employee.prototype.doAWork = function() {
    //TODO
};

function Cook(name, salary, id) {
    Employee.call(this, name, salary, id);
}

Cook.prototype = Object.create(Employee.prototype);
Cook.prototype.constructor = Cook;
Cook.prototype.doAWork = function() {
    //TODO
};

function Waiter(name, salary, id) {
    Employee.call(this, name, salary, id);
}

Waiter.prototype = Object.create(Employee.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.prototype.doAWork = function() {
    //Todo
}

function Customer() {

}

Customer.prototype.orderDishes = function() {
    //TODO
};

Customer.prototype.eat = function() {
    //TODO
}

function Dish(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}