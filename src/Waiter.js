const { Employee } = require("./employee");

function Waiter(name, salary, id) {
    Employee.call(this, name, salary, id);
}

Waiter.prototype = Object.create(Employee.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.prototype.doAWork = function() {
    //Todo
}