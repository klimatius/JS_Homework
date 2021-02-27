let btnShop,
	btnAuto,
	btnHome;

class Credits{

	setActions(){
		btnShop = document.getElementsByClassName('shop')[0];
		btnAuto = document.getElementsByClassName('auto')[0];
		btnHome = document.getElementsByClassName('home')[0];
		btnShop.addEventListener('click', () => this.shop());
		btnAuto.addEventListener('click', () => this.auto());
		btnHome.addEventListener('click', () => this.home());
	}

	shop(){
		event.preventDefault();
		document.getElementsByClassName('credit__shop')[0].classList.toggle('visible');
		if(document.getElementsByClassName('credit__shop')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__shop')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('credit__auto')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__auto')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('credit__home')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__home')[0].classList.toggle('visible');
		}
	}

	home(){
		event.preventDefault();
		document.getElementsByClassName('credit__home')[0].classList.toggle('visible');
		if(document.getElementsByClassName('credit__home')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__home')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('credit__shop')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__shop')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('credit__auto')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__auto')[0].classList.toggle('visible');
		}
	}

	auto(){
		event.preventDefault();
		document.getElementsByClassName('credit__auto')[0].classList.toggle('visible');
		if(document.getElementsByClassName('credit__auto')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__auto')[0].classList.toggle('visible');
		}		
		if(!document.getElementsByClassName('credit__shop')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__shop')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('credit__home')[0].classList.contains('visible')){
			document.getElementsByClassName('credit__home')[0].classList.toggle('visible');
		}
	}

	afterRender() {
        this.setActions();
    }

	render() {

        return new Promise(resolve => {
            resolve(`
                <main class="main__credits">
					<div class="main-container">
					<h2 class="credits__title">
						Кредиты
					</h2>
					<p class="choose-credit">Выберите кредит</p>
					<div class="type-of-currency__button">
					<button class="type-of-currency shop" type="button"><img src="images/покупки.jpg" width="60" height="50"></button>
					<button class="type-of-currency auto" type="button"><img src="images/машина.jpg" width="60" height="50"></button>
					<button class="type-of-currency home" type="button"><img src="images/домик.jpg" width="60" height="50"></button>
				</div>
					<section class="all-credits">
						<div class="type-of-credit__container credit__shop">
							<h3 class="name-of-credit">Кредит «Леди» на потребительские нужды</h3>
							
							<div class="credit__wrapper">
								<img class="credit__image" src="images/for-yourself.jpg" width="86" height="140">
								<p class="credit_description">Ставка: 20% годовых, фиксированная <br>
							Срок кредита: 12-36 месяцев <br>
							Для сильных и независимых!</p>
							</div>
						</div>
						<div class="type-of-credit__container credit__auto visible">
							<h3 class="name-of-credit">Автокредит</h3>
							
							<div class="credit__wrapper">
								<img class="credit__image" src="images/автоутка.jpg" width="86" height="140">
								<p class="credit__description">
							Срок кредита: 12-24 месяцев <br>
							Минимальный взнос: 30% от стоимости<br>
							Мчи к своей мечте!
							</p>
							</div>
						</div>
						<div class="type-of-credit__container credit__home visible">
							<h3 class="name-of-credit">Ипотечный кредит</h3>
					
							<div class="credit__wrapper">
								<img class="credit__image" src="images/домикутка.jpg" width="86" height="140">
								<p class="credit__description">Ставка: Ставка рефинансирования + 3% годовых<br>
							Срок кредитования: 10-20 лет<br>
							Купи себе свой домик для уточки!
							</p>
							</div>
						</div>
					</section>
				</div>
				</main>
            `);
        });
    }
}


export default Credits;