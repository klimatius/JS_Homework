function Animal(name){
    var foodAmount = 50;

    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };
    
    self._name = name;

    var animalFeed = self.animalFeed;
    self.animalFeed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.' + '\nКот доволен ^_^');
        return self;
    };
}

function Cat(name) {
    var self = this;
    
    Animal.call(self, name);

    self.stroke = function(){
        console.log('Гладим Его Величество Кота');
        return self;
    }
}

var barsik = new Cat('Барсик');

barsik.dailyNorm(300);
barsik.animalFeed().stroke();
barsik.stroke().animalFeed();

