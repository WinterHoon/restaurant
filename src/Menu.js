let Menu = (function(){
    let instance;
    return class {
        constructor() {
            if (!instance) {
                this.mealList = [];
                instance = this;
            }
            return instance;
        }

        addMeal(meal) {
            this.mealList.push(meal);
        }
    };
})();

export {Menu};