//Задание 1
function Animal(name){
    var _foodAmount = 50;
    var self = this;   
    self.name = name;

   var _animalFeed = self.animalFeed;
    
}

Animal.prototype.formatFoodAmount = function(){
     return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        self._foodAmount = amount;
    };

Animal.prototype.animalFeed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.' );
        return self;
    };

function Cat(name) {
    this.name = name;
    var self = this;
}

Cat.prototype = Object.create(Animal.prototype);


Cat.prototype.feed = function(){
    console.log('Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function(){
        console.log('Гладим Его Величество Кота');
        return this;
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
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length){
        return false;
    } else {
        for(var i = 0; i < keys1.length; i++){ 
            if(typeof(obj1[keys1[i]]) == 'object' && obj1[keys1[i]]!=null && !obj1[keys1[i]].length > 0){
                if(!deepEquals(obj1[keys1[i]],obj2[keys1[i]])){ 
                    return false;
            } else continue;
            } 

            if(typeof(obj1[keys1[i]]) == 'object' && obj1[keys1[i]]!=null && obj1[keys1[i]].length > 0){
                if(obj1[keys1[i]].length == obj2[keys1[i]].length){
                    for(var j = 0; j < obj1[keys1[i]].length; j++){
                        if(typeof(obj1[keys1[i]]) == 'object' && obj1[keys1[i]]!=null && !obj1.length > 0){
                            if(!deepEquals(obj1[keys1[i]],obj2[keys1[i]])){ 
                                return false;
                                } else continue;
                        } else if(obj1[keys1[i]][j] != obj2[keys1[i]][j]){
                            return false;
                        }
                    }
                } else return false;
                continue;
            }

            if(typeof(obj1[keys1[i]]) == 'function'){
                if(!(obj1[keys1[i]].toString() == obj2[keys1[i]].toString())){
                    return false;
                }
                else continue;
            }

            if (!(obj1[keys1[i]] == obj2[keys1[i]])){
                return false;
            } else continue;
        }
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
          number: 30,
          string: 'Vasya',
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
