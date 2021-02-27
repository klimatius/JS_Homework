class WelcomePage{

	setActions(){

	}

	afterRender() {
        this.setActions();
    }

	render() {


        return new Promise(resolve => {
            resolve(`
                <div class="main-container"
                <div class="main-page__info">
               <p class="main-page__text"> Добро пожаловать в БелГаГаГа Банк! <br>
                Индивидуальный подход к каждому гусю и гусыне! <br>
                Выгодные процентные ставки! <br>
                Нам доверяют миллионы! <br>
              	Поспешите и Вы стать клиентом нашего банка!</p>
                 <img class="main-page__image" src="images/заставка.jpg" >
				</div>
                </div>
            `);
        });
    }
}

export default WelcomePage;