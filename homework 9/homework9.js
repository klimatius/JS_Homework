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
    
    self.name = name;
    var feed = self.feed;
    self.feed = function(){

    }
   var feed = self.feed;
    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.' );
        return self;
    };
}

function Cat(name) {
    var self = this;
    
    Animal.call(self, name);

    var animalFeed = self.feed;
    self.catFeed = function() { 
        animalFeed.call(this);
        console.log('Кот доволен ^_^');
        return self;
    }

    self.stroke = function(){
        console.log('Гладим Его Величество Кота');
        return self;
    }
}

var barsik = new Cat('Барсик');

barsik.dailyNorm(300);
barsik.catFeed().stroke();
barsik.stroke().catFeed();
