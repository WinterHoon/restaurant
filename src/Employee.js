function Employee(name, salary, id) {
    this.name = name;
    this.salary = salary;
    this.id = id;
}

Employee.prototype.doAWork = function() {
    //TODO
};

export {Employee};