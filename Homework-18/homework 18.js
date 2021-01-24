//Задание 1
var testStr = 'name_surname-1234@gmail.com';
console.log(/^[a-zA-Z]{3,10}[_][a-zA-Z]{3,10}([-][\d]{4})?[@](([a-zA-Z0-9](\.|\-)?)){2,20}(\.(com)){1}/.test(testStr));


//Задание 2
function testNumber(testNum){
	if(testNum[0] == '8'){
		return (/^(8)[-]?((025)|(029)|(033)|(044)|(017))[-]?[^0][0-9]{2}[-]?[0-9]{2}[-]?[0-9]{2}$/.test(testNum));
	}
	return (/^((\+(375))|(375))[-]?((25)|(29)|(33)|(44)|(17))[-]?[^0][0-9]{2}[-]?[0-9]{2}[-]?[0-9]{2}$/.test(testNum));
}


console.log(testNumber('+375-25-777-77-77'));
console.log(testNumber('375299999999'));
console.log(testNumber('8-044-444-44-44'));
console.log(testNumber('8033-6666666'));
console.log(testNumber('+37525-777-77-77'));
console.log(testNumber('+375-25-077-77-77'));
console.log(testNumber('975-25-477-77-77'));
console.log(testNumber('+375-25-477-77-a7'));
console.log(testNumber('+375-25-4-77-77-57'));
console.log(testNumber('+375-25-477-77-777'));
console.log(testNumber('+375-25-477-777777'));



//Задание 3
var str = "asdda";
if(str.match(/[aoeyui]/gi)){
	console.log(str.match(/[aoeyui]/gi).length);
}
	else{
		console.log('0');
}


var regexp = /[aoeyui]/gi,
	counter = 0;
while (regexp.exec(str)) {
	counter++;
}
console.log(counter);


console.log(str.split(regexp).length-1);