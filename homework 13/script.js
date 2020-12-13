var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com" target="_blank">Link 1</a> and <a href="https://twitter.com" target="_blank">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a id="ref" href="http://google.by" target="_blank">Link 3</a> and <a id="ref" href="https://vk.com" target="_blank">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var elem = document.getElementsByTagName('button');
elem[0].addEventListener('click',change,false);

function change(){
	var references = firstPar.getElementsByTagName('a');
	for(i = 0; i < references.length; i++){
		console.log(references[i]);
		references[i].classList.add('par1Style');
		document.getElementsByClassName('par1Style')[i].style.cssText = 'color: red; font-size: x-large;';
	}
	
}

secondPar.onclick = function (event){
	if(event.target.href != undefined){
		event.preventDefault();
		alert(event.target.href);
	}
};