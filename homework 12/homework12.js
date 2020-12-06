//Задание 1
function arrElemToObj(array){
	return array.map(function(name) {
	var obj = {};
    obj.name = name;
    return obj;
});
}

var names = ['HTML', 'CSS', 'JavaScript'];
arrElemToObj(names);


//Задание 2
function time(array){
	return array.reduce(function(sum, current) {
  		return sum + " : " + current;
	},"Текущее время");
}

var arr = ['00', '13', '24'];
time(arr);


//Задание 3
function countFovels(str){
	str = str.toLowerCase();
	var count = 0;
	var vow = ['e', 'u', 'i', 'o', 'a'];
	for(i = 0; i < str.length; i++){
		if(vow.includes(str[i])){
			count++;
		}
	}
	return count;
}

var a = 'aAaa',
	b = 'da',
	c = 'nnn';
	d = 'dabudi dabudai';

console.log(countFovels(a));
console.log(countFovels(b));
console.log(countFovels(c));
console.log(countFovels(d));


//Задание 4
function countSentencesLetters(str){
	str = str.split(/[!?.]/).filter(function(str) {
  		return str != '';
}).map(function(str){
    if(str[0] === ' '){
			str = str.substr(1);
		}
	var tmp = str.replace(/\s+/g,'').replace(',','');
	return str + ': Letters quantity is: ' + tmp.length;
});
	for(i = 0; i < str.length; i++){
		console.log(str[i]);
	}
}
countSentencesLetters('Привет, студент! Студент... Как дела, студент?');


//Задание 5
function maxWordCount(str){
	str = str.toLowerCase().split(/[!?.,: ]/).filter(function(str) {
  		return str != '';
});
	var sortArr = [], 
	i = 0, 
	tmpWord, 
	counter;

	while(str.length > 0){
		sortArr[i] = {};
		tmpWord = str.shift();
		counter = 1;
		for(j = 0; j < str.length; j++){
			if(str[j] == tmpWord){
				counter++;
				delete str[j];
			    str = str.filter(function(element) {
			        return element != undefined;
			    });
			}
		}
		sortArr[i][tmpWord] = counter;
		i++;
	}

	sortArr.sort(function compareNumeric(a, b) {
	  if (a[Object.keys(a)[0]] > b[Object.keys(b)[0]]) return 1;
	  if (a[Object.keys(a)[0]] == b[Object.keys(b)[0]]) return 0;
	  if (a[Object.keys(a)[0]] < b[Object.keys(b)[0]]) return -1;
	});
	
    return 'Максимальное число повторений у слова "' + Object.keys(sortArr[sortArr.length-1]) + '" - ' + Object.keys(sortArr)[sortArr.length-1];
}

console.log(maxWordCount('Привет, студент! Студент... Как дела, студент?'));