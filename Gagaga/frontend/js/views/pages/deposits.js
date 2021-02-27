let btnBYN,
	btnUSD,
	btnEUR;

class Deposits{

	setActions(){
		btnBYN = document.getElementsByClassName('currency__byn')[0];
		btnUSD = document.getElementsByClassName('currency__usd')[0];
		btnEUR = document.getElementsByClassName('currency__eur')[0];
		btnBYN.addEventListener('click', () => this.BYN());
		btnEUR.addEventListener('click', () => this.EUR());
		btnUSD.addEventListener('click', () => this.USD());
	}

	BYN(){
		event.preventDefault();
		if(document.getElementsByClassName('deposit__BYN')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__BYN')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('deposit__USD')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__USD')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('deposit__EUR')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__EUR')[0].classList.toggle('visible');
		}
	}

	EUR(){
		event.preventDefault();
		if(document.getElementsByClassName('deposit__EUR')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__EUR')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('deposit__BYN')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__BYN')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('deposit__USD')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__USD')[0].classList.toggle('visible');
		}
	}

	USD(){
		event.preventDefault();
		if(document.getElementsByClassName('deposit__USD')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__USD')[0].classList.toggle('visible');
		}		
		if(!document.getElementsByClassName('deposit__BYN')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__BYN')[0].classList.toggle('visible');
		}
		if(!document.getElementsByClassName('deposit__EUR')[0].classList.contains('visible')){
			document.getElementsByClassName('deposit__EUR')[0].classList.toggle('visible');
		}
	}

	afterRender() {
        this.setActions();
    }

	render() {

        return new Promise(resolve => {
            resolve(`
                <main class="main__deposits">
					<div class="main-container">
					<h2 class="deposits__title">
						Вклады
					</h2>
					<p class="choose-deposit">Выберите валюту вклада</p>
					<div class="type-of-currency__button">
					<button class="type-of-currency currency__byn" type="button"><img src="images/belflag.png" width="60" height="50"> BYN</button>
					<button class="type-of-currency currency__usd" type="button"><img src="images/usa.png" width="60" height="50">USD</button>
					<button class="type-of-currency currency__eur" type="button"><img src="images/eur.png" width="60" height="50">EUR</button>
				</div>
					<section class="all-deposits">
						<div class="type-of-deposit__container deposit__BYN">
							<h3 class="name-of-deposit">Вклад «Рисковый» в белорусских утках</h3>
							<img class="currency__image" src="images/belflag.png" width="100" height="66">
							<div class="deposit__wrapper">
								<img class="deposit__image" src="images/белутка.png" width="86" height="140">
								<p class="deposit__description">Ставка: 19% годовых, фиксированная <br>
							Срок вклада: 13 месяцев <br>
							Минимальная сумма вклада: 5 000 яиц белуточек <br>
							Капитализация процентов: предусмотрено <br>
							Возможность снятия процентов: предусмотрено <br>
							Частичное снятие вклада: не предусмотрено <br>
							Возможность пополнения вклада: не предусмотрено <br>
							Для патриотов и тех, кто любит риск!</p>
							</div>
						</div>
						<div class="type-of-deposit__container deposit__USD visible">
							<h3 class="name-of-deposit">Вклад «Каюга» в американских утках</h3>
							<img class="currency__image" src="images/usa.png" width="100" height="66">
							<div class="deposit__wrapper">
								<img class="deposit__image" src="images/америкаутка.jpg" width="86" height="140">
								<p class="deposit__description">Ставка: 5% годовых, фиксированная <br>
							Срок вклада: 13 месяцев <br>
							Минимальная сумма вклада: 1 000 яиц американских каюг <br>
							Капитализация процентов: предусмотрено <br>
							Возможность снятия процентов: не предусмотрено <br>
							Частичное снятие вклада: не предусмотрено <br>
							Возможность пополнения вклада: предусмотрено в течение 25 дней от даты закладки яиц в инкубатор <br>
							Вырасти себе американскую мечту!
							</p>
							</div>
						</div>
						<div class="type-of-deposit__container deposit__EUR visible">
							<h3 class="name-of-deposit">Вклад «Немецкий бюргер» в евроутках</h3>
							<img class="currency__image" src="images/EUR.png" width="100" height="66">
							<div class="deposit__wrapper">
								<img class="deposit__image" src="images/евроутка.jpg" width="86" height="140">
								<p class="deposit__description">Ставка: 5% годовых, фиксированная <br>
							Срок вклада: 13 месяцев <br>
							Минимальная сумма вклада: 1 000 яиц евроуток<br>
							Капитализация процентов: не предусмотрено <br>
							Возможность снятия процентов: не предусмотрено <br>
							Частичное снятие вклада: не предусмотрено <br>
							Возможность пополнения вклада: не предусмотрено <br>
							Почувствуй себя степенным европейским фермером!
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

export default Deposits;