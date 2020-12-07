var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com" target="_blank">Link 1</a> and <a href="https://twitter.com" target="_blank">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by" target="_blank">Link 3</a> and <a href="https://vk.com" target="_blank">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var elem = document.getElementsByTagName('button');
elem[0].addEventListener('click',change,false);

function change(){
	var par1 = firstPar.children;
	for(i = 0; i < par1.length; i++){
		par1[i].style.color = 'red';
		par1[i].style.fontSize = 'x-large';
	}
}

secondPar.onclick = function(event){
	event.preventDefault();
	alert(event.target.href);
};