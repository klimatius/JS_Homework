class Info{

	setActions(){

	}

	afterRender() {
        this.setActions();
    }

	render() {


        return new Promise(resolve => {
            resolve(`
                <div class="main-container">
                <div class="bank-info__manual">
               <p class="manual__title"> ООО "БелГаГаГа Банк" был основан в 2021 году, но быстро завоевал свою популярность и доверие по всему миру. <br>
               <span class="the-bank-manual"> Председатель Правления - Гусенко Гусейн Гусенович </span> </p>
                <img class="manual__image" src="images/председатель.jpg" width= "450" height="450" alt="председатель Правления">
				</div>
                </div>
            `);
        });
    }
}

export default Info;