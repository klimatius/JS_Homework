class Welcome{
    setActions(){
        document.getElementById('krya-btn').addEventLister('click', move());
    }

    move(){
        document.getElementsByClassName('logoGif')[0].src = 'images/gus.gif';
        let start = Date.now(); 
        let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        if (timePassed >= 2000 &&  (getCoords(document.getElementsByClassName('logoGif')[0]).left >= (document.documentElement.clientWidth))) {    
            clearInterval(timer); 
            removeBlock();

            setTimeout( () => {
                document.getElementById('main-div').classList.toggle('visible')
            },1200);
            
            return;
        }
        draw(timePassed);
    }, 20);

        
    }

    draw(timePassed) {
            document.getElementsByClassName('logoGif')[0].style.left = timePassed / 2.5 + 'px';
        }

    getCoords(elem) { 
        var box = elem.getBoundingClientRect();
        return {
            left: box.left + pageXOffset
        };
    }

    removeBlock() {
    let block = document.getElementsByClassName('front')[0];
    block.style.opacity = 1;
  
    let blockId = setInterval(function() {
        if (block.style.opacity > 0) block.style.opacity -= .1;
        else {
            clearInterval(blockId);
            block.remove();
        }
        }, 100)
    }


    render(){
        return new Promise(resolve => {
            resolve(document.body.innerHTML=`<div class="front"> 
                    <h1> Приветствуем Вас в БелГаГаГА банке!</h1>
                    <img class="logoGif" src="images/gus.png" alt="logoGif">
                    <button class="welcomeButton" id="krya-btn">Кря!</button>
                    </div>
                `)
        });
    }
}

export default Welcome;
    /*function createFirstPromise() {
            return new Promise((resolve) => {
                
                    document.body.innerHTML=`<div class="front"> 
                    <h1> Приветствуем Вас в БелГаГаГА банке!</h1>
                    <img class="logoGif" src="images/gus.png" alt="logoGif">
                    <button class="welcomeButton" id="krya-btn">Кря!</button>
                    </div>
                `

            });
    }

    createFirstPromise()
        .then(() => {
           //// document.getElementById('krya-btn').addEventLister('click', move());
        })
        .catch(error => console.log(`Возникла ошибка в промисе: ${error}`))
        .finally(() => console.log('Работа промисов завершена'));
                   // document.getElementById('krya-btn').addEventLister('click', move());*/