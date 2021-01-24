var timerIsGoing;
var ms, s = 0, min = 0;

window.onload = function (){
	if(localStorage.getItem('timeList') && !localStorage.getItem('state')){
		document.getElementsByClassName('timer')[0].remove();
		document.getElementsByTClassName('main-wrapper')[0].insertAdjacentHTML('beforeEnd',localStorage.getItem('timeList'));
		return;
	}
	if(localStorage.getItem('ms')){
		ms = +localStorage.getItem('ms');
		s = +localStorage.getItem('s');
		min = +localStorage.getItem('min');
		document.getElementsByTagName('td')[2].innerHTML = (ms < 10) ? '0' + ms : ms;
		document.getElementsByTagName('td')[1].innerHTML = (s < 10) ? '0' + s : s;
		document.getElementsByTagName('td')[0].innerHTML = (min < 10) ? '0' + min : min;
	}
	else{
		ms = 0; 
    	s = 0;
    	min = 0;
	}

	if(localStorage.getItem('timeList')){
		document.getElementsByClassName('main-wrapper')[0].insertAdjacentHTML('beforeEnd',localStorage.getItem('timeList'));
	}

	if(localStorage.getItem('state') == 'going'){
		document.getElementsByTagName('button')[0].dataset.state = 'stopped';
		timeCount();
	} 

	if(localStorage.getItem('state') == 'stopped') {
		document.getElementsByTagName('button')[0].dataset.state = 'going';
		timeCount();
	}
}


function timeCount(){
	if(!document.getElementsByClassName('save')[0] && document.getElementsByClassName('timer')[0]){
		document.getElementsByClassName('timer')[0].insertAdjacentHTML('afterEnd','<button class="save" onclick="save()">Save</button>');
	}

	if(!document.getElementsByClassName('reset')[0] && document.getElementsByClassName('timer')[0]){
		document.getElementsByClassName('timer')[0].insertAdjacentHTML('afterEnd','<button class="reset" onclick="reset()">Reset</button>');
	}

    if(document.getElementsByTagName('button')[0].getAttribute('data-state') == 'stopped'){
		document.getElementsByTagName('button')[0].innerHTML = 'Stop';
		document.getElementsByTagName('button')[0].dataset.state = 'going';
		localStorage.setItem('state', 'going');

		timerIsGoing = setInterval(function() {
			if(min == 60){
				clearInterval(timerIsGoing);
				endTimer();
				return;
			}

		    ms += 1;
		    if (ms < 10){
		    	document.getElementsByTagName('td')[2].innerHTML = '0' + ms;
		    }
		    else if(ms != 100) document.getElementsByTagName('td')[2].innerHTML = ms;

		    if (ms == 100) {
		    	s += 1;
		    	ms = 0;
		    	document.getElementsByTagName('td')[2].innerHTML = '0' + ms;
		    
		    	if (s == 60) {
		    		s = 0;
		    		min += 1;	    			
		    	}
		    }

		    document.getElementsByTagName('td')[1].innerHTML = (s < 10) ? '0' + s : s;
			document.getElementsByTagName('td')[0].innerHTML = (min < 10) ? '0' + min : min;
			localStorage.setItem('ms', ms);
			localStorage.setItem('s', s);
			localStorage.setItem('min', min);
		    }, 10);
	}  
	else{ 
		clearInterval(timerIsGoing);
		document.getElementsByTagName('button')[0].innerHTML = 'Run';
		document.getElementsByTagName('button')[0].dataset.state = 'stopped';
		localStorage.setItem('ms', ms);
		localStorage.setItem('s', s);
		localStorage.setItem('min', min);
		localStorage.setItem('state', 'stopped');
	}
}



function reset(){
	if(min != 60){
		clearInterval(timerIsGoing);
		document.getElementsByTagName('td')[0].innerHTML = '00';
		document.getElementsByTagName('td')[1].innerHTML = '00';
		document.getElementsByTagName('td')[2].innerHTML = '00';
		document.getElementsByTagName('button')[0].innerHTML = 'Run';
	}
	else{
		document.getElementsByClassName('main-wrapper')[0].insertAdjacentHTML('afterBegin','<button class="command" onclick="timeCount()">Run</button><table class="timer" data-state="stopped"><td>00</td><td>00</td><td>00</td></table>');

	}

	document.getElementsByClassName('reset')[0].remove();
	
	if(document.getElementsByClassName('save')[0]){
		document.getElementsByClassName('save')[0].remove();
	}
	
	if(document.getElementsByClassName('timeList')[0]){
		document.getElementsByClassName('timeList')[0].remove();
	}
	document.getElementsByTagName('button')[0].dataset.state = 'stopped';
	localStorage.clear();
	ms = 0;
	s = 0;
	min = 0;
}


function save(){
	var newLi = document.createElement('li'),
		currentTime;

	currentTime = (min < 10) ? '0' + min + ' : ' : min + ' : ';
	currentTime = (s < 10) ? currentTime + '0' + s + ' : ' : currentTime + s + ' : ';
	currentTime = (ms < 10) ? currentTime + '0' + ms : currentTime + ms;
  	newLi.innerHTML = currentTime;

  	if(!document.getElementsByClassName('timeList')[0]){
		document.getElementsByClassName('save')[0].insertAdjacentHTML('afterEnd','<ol class="timeList"></ol>');
  	}
	document.getElementsByClassName('timeList')[0].appendChild(newLi);
	localStorage.setItem('timeList', document.getElementsByClassName('timeList')[0].outerHTML);
}

function endTimer(){
	document.getElementsByTagName('td')[0].innerHTML = '60';
	document.getElementsByTagName('td')[1].innerHTML = '0' + s;
	document.getElementsByTagName('td')[2].innerHTML = '0' + ms;
	document.getElementsByClassName('save')[0].remove();
	document.getElementsByClassName('timer')[0].remove();
	document.getElementsByTagName('button')[0].remove();
	localStorage.removeItem('min');
	localStorage.removeItem('s');
	localStorage.removeItem('ms');
	localStorage.removeItem('state');
}
function endTimer(){
	document.getElementsByClassName('save')[0].remove();
	document.getElementsByClassName('timer')[0].remove();
	document.getElementsByTagName('button')[0].remove();
	localStorage.removeItem('min');
	localStorage.removeItem('s');
	localStorage.removeItem('ms');
	localStorage.removeItem('state');
}
