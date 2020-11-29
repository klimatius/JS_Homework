//Задание 1
var arr = [-1, 0, 2, 34, -2];
arr.filter(function(number){
    return number > 0;
});


//Задание 2
var arr = [-1, 0, 2, 34, -2];
var firstPositive = arr.find(function(number) {
    return number > 0;
});
firstPositive;


//Задание 3
function isPalindrome(str){
	str = str.toLowerCase();
	for(i = 0; i < str.length/2; i++){
		if(str[i] != str[str.length-i-1]){
			return false;
		}
	}
	return true;
}

isPalindrome('Шалаш');
isPalindrome('привет');


//Задание 4
function areAnagrams(str1,str2){
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	if(str1.length == str2.length){
		for(i = 0; i < str1.length; i++){
			if(str2.indexOf(str1[i]) != -1){
				str2.replace(str1[i], ' ');
			}
			else return false;
		}
	} else return false;
	return true;
}

areAnagrams('кот', 'отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false


//Задание 5
function divideArr(arr, number){
	var tempArr = [];
	while(arr.length > 0){
		tempArr.push(arr.splice(0,number));
	}
	return tempArr;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]