let Restaurant = (function(){
    let instance;
    return class {
        constructor(obj) {
            if (!instance) {
                //现金流
                this.cash = obj.cash;
                //座位数量
                this.seats = obj.seats;
                //员工
                this.staff = [];
                //门外顾客队列
                this.customerQueueOut =[];
                //厅内顾客
                this.customerQueueIn = [];
                //待做菜品
                this.mealToCook = [];
                //完成菜品
                this.mealDone = [];
                instance = this;
            }
            return this;
        }

        hire(employee) {
            this.staff.push(employee);
        }

        fire(employee) {
            for (let index in this.staff) {
                if (this.staff[index].id === employee.id ) {
                    this.staff.splice(index, 1);
                    break;
                }
            }
        }

        addCustomer(customer) {
            this.customerQueueOut.push(customer);
            console.log(`有顾客${customer.name}到来,当前店外人数${this.customerQueueOut.length}`);
            if (this.customerQueueIn.length < this.seats) {
                let customer = this.customerQueueOut.shift();
                this.customerQueueIn.push(customer);
                console.log(`顾客${customer.name}进店就坐`);
                customer.waitToOrder();
            }
            // if (this.customerQueueIn.length < this.seats) {
            //     if (this.customerQueueOut.length === 0) {
            //         this.customerQueueIn.push(customer);
            //         customer.waitToOrder();
            //     } else {
            //         this.customerQueueIn.push(this.customerQueueOut.shift());
            //         this.customerQueueOut.push(customer);
            //     } 
            // } else {
            //     this.customerQueueOut.push(customer);
            // }
            
        }

    };
})();

export { Restaurant };