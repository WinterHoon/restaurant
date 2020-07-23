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

export {Restaurant};