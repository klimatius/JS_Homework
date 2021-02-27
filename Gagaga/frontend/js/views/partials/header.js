import Component from '../../views/component.js';

class Header extends Component{
    render() {
        const resource = this.request.resource;

        return new Promise(resolve => {
            resolve(`
                <header class="header">                    
            
    	        <div class="common-site__nav">
		            <div class="main-container">
		                <div class="common-site__nav--wrapper">
				        	<a class="page-header__logo" href="#">
				            	<img class="page-header__logo-image" src="images/logo2.png" width="234" height="72" alt="logo">
				        	</a>
				        	<div class="common-nav__list">
				            	<ul class="common-site__list site-list">
				                	<li class="common-site__item"><a href="#">Отделения</a></li>
				                	<li class="common-site__item"><a href="#">Банкоматы</a></li>
				                	<li class="common-site__item"><a href="#">Частным лицам</a></li>
				                	<li class="common-site__item"><a href="#">Бизнес-клиентам</a></li>
				                	<li class="common-site__item"><a href="#">О банке</a></li>
				            	</ul>
					            <ul class="common-site__list user-list">
					                <li class="user-list__item">
					                    <a class="user-list__login" href="login.html">
					                        Интернет-банк
					                    </a>
					                </li>
					            </ul>
				        	</div>
				    	</div>
					</div>
				</div>
				    <div class="main-container">
				        <nav class="main-nav__wrapper">
				            <ul class="main-nav__list">
				                <li class="main-nav__item"><a href="#/cards">Карты</a></li>
				                <li class="main-nav__item"><a href="#/credits">Кредиты</a></li>
				                <li class="main-nav__item"><a href="#/deposits">Депозиты и сбережения</a></li>
				                <li class="main-nav__item"><a href="#/info">Информация</a></li>
				            </ul>
				        </nav>
				    </div>                                
                </header>
            `);
        });
    }
}

export default Header;