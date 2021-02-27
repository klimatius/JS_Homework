import Component from '../../views/component.js';

class Footer extends Component{
    render() {
        return new Promise(resolve => {
            resolve(`
                <footer class="main-footer">
			        <div class="main-container">
			        <div class="footer-nav__wrapper">
			            <div class="footer-nav__for-customers">
			                <ul class="footer-nav__list">
			                    <li class="list-item"><a href="#">Частным клиентам</a></li>
			                    <li class="list-item"><a href="#">Бизнес-клиентам</a></li>
			                    <li class="list-item"><a href="#">О банке</a></li>
			                </ul>
			            </div>
			            <div class="footer-nav__about-bank">
			                <ul class="footer-nav__list">
			                    <li class="list-item"><a href="#">Обратная связь</a></li>
			                    <li class="list-item"><a href="#">Наши адреса</a></li>
			                    <li class="list-item"><a href="#">Финансовые показатели</a></li>
			                    <li class="list-item"><a href="#">Раскрытие информации</a></li>
			                </ul>
			            </div>
			            <form class="footer-nav__search">
			                <p>
			                <input class="search__item" type="search" name="search" placeholder="Поиск по сайту">
			                <input class="search__button" type="submit" name="find" value="Найти"></p>
			            </form>
			        </div>
			            <div class="footer-contacts__wrapper">
			                <div class="contacts__bank-name">
			                    <p>ООО "Белгагагабанк</p>
			                    <p>Адрес Головного офиса: <br>
			                    г. Минск, ул. Краснозвездная, 18
			                </p>
			                </div>

			                <div class="bank-socials">
			                    <ul class="bank-socials__list">
			                        <li class="bank-socials_item"><a href=" #">
			                            <img src="images/imst.png" width="30" height="30" alt="instagram" >
			                        </a></li>
			                        <li class="bank-socials_item"><a href=" #">
			                            <img src="images/vk.png" width="30" height="30" alt="Вконтакте" >
			                        </a></li>
			                        <li class="bank-socials_item"><a href=" #">
			                            <img src="images/yout.png" width="30" height="30" alt="YouTube" >
			                        </a></li>
			                    </ul>
			                    
			                </div>
			                
			            </div>

			        </div>
			    </footer> 
              
            `);
        });
    }
}

export default Footer;