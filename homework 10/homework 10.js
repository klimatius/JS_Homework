//Задание 1
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

   var animalFeed = self.animalFeed;
    self.animalFeed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.' );
        return self;
    };
}

function Cat(name) {
    this._name = name;
    var self = this;
    Animal.call(self);
}

Cat.prototype.feed = function(){
    console.log('Кот доволен ^_^');
    return self;
}

Cat.prototype.stroke = function(){
        console.log('Гладим Его Величество Кота');
        return self;
    }

var barsik = new Cat('Барсик');

barsik.dailyNorm(300);
barsik.feed().stroke();
barsik.stroke().feed();


//Задание 2
function deepClone(obj){
    var clone;
    
    if (null == obj || typeof(obj) != "object"){
        return obj;
    }

    if(typeof(obj) == "object" && obj.length > 0){
        clone = [];
        var len = obj.length;
        for(i = 0; i < len; i++){
            clone[i] = deepClone(obj[i]);
        }
        return clone;
    }

    if(typeof(obj) == "object" && !obj.length > 0){
        clone = {};
        for(var key in obj){
             clone[key] = deepClone(obj[key]);
        }
        return clone;
    } 

    return clone;          
}

var initialObj = {
          string: 'Vasya',
          number: 30,
          boolean: true,
          undefined: undefined,
          null: null,
          array: [1, 2, 3],
          object: {
              string2: 'Petrov',
              object2: {
                  array2: [{}, {}]
              },
              object3: {}
          },
          method: function() {
              alert('Hello');
          }
      };

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


//Задание 3
function deepEquals(obj1, obj2){
    for(var key in obj1){ 
            if(typeof(obj1[key]) == 'object' && obj1[key]!=null && !obj1.length > 0){
                if(!deepEquals(obj1[key],obj2[key])){ 
                return false;
            } else continue;
            } 

           if(typeof(obj1[key]) == 'object' && obj1[key]!=null && obj1.length > 0){
               if(obj1.length == obj2.length){
                    for(var i = 0; i < obj1.length; i++){
                        if(typeof(obj1[key]) == 'object' && obj1[key]!=null && !obj1.length > 0){
                            if(!deepEquals(obj1[key],obj2[key])){ 
                               return false;
                            } else continue;
                        } else if(obj1[key][i] != obj2[key][i]){
                         return false;
                     }
                    }
                    } else return false;
            continue;
            }

            if(typeof(obj1[key]) == 'function'){
                if(!(obj1[key].toString() == obj2[key].toString())){
                    return false;
                }
                else continue;
            }

             if (!(obj1[key] == obj2[key])){
                return false;
            } else continue;
        }
    return true;
}

var initialObj = {
          string: 'Vasya',
          number: 30,
          boolean: true,
          undefined: undefined,
          null: null,
          array: [1, 2, 3],
          object: {
              string2: 'Petrov',
              object2: {
                  array2: [{}, {}]
              },
              object3: {}
          },
          method: function() {
              alert('Hello');
          }
      };


var initialObj1 = {
          string: 'Vasya',
          number: 30,
          boolean: true,
          undefined: undefined,
          null: null,
          array: [1, 2, 3],
          object: {
              string2: 'Petrov',
              object2: {
                  array2: [{}, {}]
              },
              object3: {}
          },
          method: function() {
              alert('Hello');
          }
      };
deepEquals(initialObj, initialObj1);