const { Employee } = require("./employee");

function Cook() {
    Employee.call(this, name, salary, id);
}

Cook.prototype = Object.create(Employee.prototype);
Cook.prototype.constructor = Cook;
Cook.prototype.doAWork = function() {
    //TODO
};