let btnStep1,
    btnBaseCard,
    btnUserCard,
    btnStep2End,
    btnStep3End,
    cardData = {};
    


class Cards{
    labelClickHandler(){
        if(document.getElementById('card-section').classList.contains('visible')){
            document.getElementById('card-section').classList.toggle('visible');
        }
        if(!document.getElementById('design-section').classList.contains('visible')){
            document.getElementById('design-section').classList.toggle('visible');
        }
        if(!document.getElementById('user-data-section').classList.contains('visible')){
            document.getElementById('user-data-section').classList.toggle('visible');
        }
        if(!document.getElementById('card-final').classList.contains('visible')){
            document.getElementById('card-final').classList.toggle('visible');
        }
       
    }  

    setActions() {
        btnStep1 = document.getElementsByClassName('card-choice__button')[0],
        btnBaseCard = document.getElementById('design-basic'),
        btnUserCard = document.getElementById('design-user'),
        btnStep2End = document.getElementsByClassName('button__continue')[0];
        btnStep3End = document.getElementsByClassName('button__continue')[1];
       
        btnStep1.addEventListener('click', () => this.btnEnd1());
        btnBaseCard.addEventListener('click', () => this.btnBase());
        btnUserCard.addEventListener('click', () => this.btnUserCardDesign());
        btnStep2End.addEventListener('click', () => this.btnEnd2());
        btnStep3End.addEventListener('click', () => this.btnEnd3());
        document.getElementsByClassName('main-nav__item')[0].addEventListener('click', () => this.labelClickHandler());

        const frame = document.getElementById('user-image');
        const file = document.getElementById('card-load');
        const reader = new FileReader();
        
        reader.addEventListener("load", function () {
            frame.style.backgroundImage = `url(${ reader.result })`;
            cardData['Image'] = reader.result;
        }, false);
        
        file.addEventListener('change',function() {
            const image = this.files[0];
            if(image) reader.readAsDataURL(image);
            document.getElementById('user-image').style.width = '320px';
            document.getElementById('user-image').style.height = '200px';
            }, false);

        this.colorsClickHandler(document.getElementsByClassName('card-color-choice')[0]);
        
    }

    btnEnd1(){
        event.preventDefault();

        const selectCard = document.getElementById('card_select'),
            selectCardIndex = selectCard.selectedIndex,
            selectCurrency = document.getElementById('currency'),
            selectCurrencyIndex = selectCurrency.selectedIndex,
            selectType = document.getElementById('card-type'),
            selectTypeIndex = selectType.selectedIndex,
            customerName = document.getElementById('customer-name').value,
            selectPlace = document.getElementById('place-choice'),
            selectPlaceIndex = selectPlace.selectedIndex,
            customerComment = document.getElementById('customer-comment').value;

        if(this.checkName(customerName) && selectPlace[selectPlaceIndex].text != 'Не выбрано'){
            cardData["Карта"] = selectCard[selectCardIndex].text; 
            cardData["Валюта"] = selectCurrency[selectCurrencyIndex].text;
            cardData["Тип"] = selectType[selectTypeIndex].text;
            cardData["Имя фамилия"] = customerName;
            cardData["Место выдачи"] = selectPlace[selectPlaceIndex].text;
            cardData["Комментарий"] = customerComment;
            document.getElementById('card-section').classList.toggle('visible');
            document.getElementById('design-section').classList.toggle('visible');
        }
        
        if(!this.checkName(customerName) && !document.getElementById('customer-name').classList.contains('invalid-input')){
            document.getElementById('customer-name').classList.toggle('invalid-input');
        }

        if(this.checkName(customerName) && document.getElementById('customer-name').classList.contains('invalid-input')){
            document.getElementById('customer-name').classList.toggle('invalid-input');
        }

        if(selectPlace[selectPlaceIndex].text == 'Не выбрано' && !document.getElementById('place-choice').classList.contains('invalid-select')){
            document.getElementById('place-choice').classList.toggle('invalid-select');

        }

        if(selectPlace[selectPlaceIndex].text != 'Не выбрано' && document.getElementById('place-choice').classList.contains('invalid-select')){
            document.getElementById('place-choice').classList.toggle('invalid-select');

        }

        this.setCardImage();

    }

    setCardImage(){
    
        if(cardData['Карта'] == 'Visa Gold'){
            document.getElementsByClassName('card__design--image')[0].src = 'images/visagold.jpg';
            document.getElementsByClassName('card__design--image')[1].src = 'images/visagold.jpg';
        }
        if(cardData['Карта'] == 'Visa Classic'){
            document.getElementsByClassName('card__design--image')[0].src = 'images/visaclassic.jpg';
            document.getElementsByClassName('card__design--image')[1].src = 'images/visaclassic.jpg';
        }
        if(cardData['Карта'] == 'Белкарт'){
            document.getElementsByClassName('card__design--image')[0].src = 'images/belkart.jpg';
            document.getElementsByClassName('card__design--image')[1].src = 'images/belkart.jpg';
        }
        if(cardData['Карта'] == 'Mastercard Gold'){
            document.getElementsByClassName('card__design--image')[0].src = 'images/mastergold.jpg';
            document.getElementsByClassName('card__design--image')[1].src = 'images/mastergold.jpg';
        }
        if(cardData['Карта'] == 'Mastercard Unembossed'){
            document.getElementsByClassName('card__design--image')[0].src = 'images/masterun.jpg';
            document.getElementsByClassName('card__design--image')[1].src = 'images/masterun.jpg';
        }
    }

    btnBase(){
        event.preventDefault();
        if(!document.getElementById('individual-design-section').classList.contains('visible')){
            document.getElementById('individual-design-section').classList.toggle('visible');
        }
        document.getElementById('design-section').classList.toggle('visible');
        document.getElementById('user-data-section').classList.toggle('visible');
    }

    btnUserCardDesign(){
        event.preventDefault();
        document.getElementById('individual-design-section').classList.toggle('visible');
        
    }

    colorsClickHandler(colors){
        event.preventDefault();
        colors.onclick = () => {
            let target = event.target;
            let color = window.getComputedStyle(target).backgroundColor;
            document.getElementById('card_back').style.backgroundColor = color;
            cardData["Цвет задней стороны"] = color;
        }
    }

    btnEnd2(){
        event.preventDefault();
        document.getElementById('design-section').classList.toggle('visible');
        document.getElementById('individual-design-section').classList.toggle('visible');
        document.getElementById('user-data-section').classList.toggle('visible');
    }

    btnEnd3(){
        event.preventDefault();
        var selectUserDocument = document.getElementById('document'),
            selectUserDocumentIndex = selectUserDocument.selectedIndex,
            customerName = document.getElementsByClassName('card-choice__customer--name')[1].value,
            customerLastName = document.getElementsByClassName('card-choice__customer--name')[2].value,
            customerPatronymic = document.getElementsByClassName('card-choice__customer--name')[3].value,
            birthDate = document.getElementsByClassName('card-choice__customer--name')[4].value,
            birthPlace = document.getElementsByClassName('card-choice__customer--name')[5].value,
            passportNum = document.getElementsByClassName('card-choice__customer--name')[6].value,
            customerIdNumber = document.getElementsByClassName('card-choice__customer--name')[7].value,
            issuingAgency = document.getElementsByClassName('card-choice__customer--name')[8].value,
            issuingDate = document.getElementsByClassName('card-choice__customer--name')[9].value,
            validity = document.getElementsByClassName('card-choice__customer--name')[10].value,
            email = document.getElementsByClassName('card-choice__customer--name')[11].value,
            mobile = document.getElementsByClassName('card-choice__customer--name')[12].value,
            codeWord = document.getElementsByClassName('card-choice__customer--name')[13].value;

        cardData['Тип документа'] = selectUserDocument[selectUserDocumentIndex].text;
        cardData['Имя'] = customerName;
        cardData['Фамилия'] = customerLastName;
        cardData['Отчество'] = customerPatronymic;
        cardData['Дата рождения'] = birthDate;
        cardData['Серия и номер документа'] = passportNum;
        cardData['Идентификационный номер'] = customerIdNumber;
        cardData['Кем выдан'] = issuingAgency;
        cardData['Дата выдачи'] = issuingDate;
        cardData['Срок действия'] = validity;
        cardData['Email'] = email;
        cardData['Телефон'] = mobile;
        cardData['Кодовое слово'] = codeWord;
        
        this.sendToServ();
        document.getElementById('user-data-section').classList.toggle('visible');
        document.getElementById('card-final').classList.toggle('visible');

    }

    sendToServ(){
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();

            xhr.open('POST', 'http://localhost:3000/api/cards');
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => resolve(JSON.parse(xhr.response));

            xhr.send(JSON.stringify(cardData));

        
        });
    }

    checkName(str){
        return /^[a-z]{2,}[\s][a-z]{2,}$/i.test(str);
    }

    render() {
        return new Promise(resolve => {
            resolve(`
                <main>
                <div class="main-container">
                    <h1 class="main-text">Онлайн-заявка на карточку</h1>
                    <section class="card-choice" id="card-section">
                        <form class="card-choice__form">
                            <h2 class="card-choice__text--main">Шaг 1: Выбор карты</h2>
                            <!--<p class="card-choice__text">Выберите тип карты:</p>
                                <select class="card-choice__select">
                                    <option value="1">Visa</option>
                                    <option value="2">Mastercard</option>
                                    <option value="3">Белкарт</option>
                                </select> -->
                            
                            <p class="card-choice__text">Выберите карту:</p>
                                <select class="card-choice__select" id="card_select">
                                    <option value="1">Visa Gold</option>
                                    <option value="2">Visa Classic</option>
                                    <option value="3">Белкарт</option>
                                    <option value="4">Mastercard Gold</option>
                                    <option value="5">Mastercard Unembossed</option>
                                </select>
                            
                            <p class="card-choice__text">Валюта счёта:  </p>
                                <select class="card-choice__select" id="currency">
                                    <option value="1">BYN</option>
                                    <option value="2">USD</option>
                                    <option value="3">EUR</option>
                                </select>
                        
                            <p class="card-choice__text">Вид карты:</p>
                                <select class="card-choice__select" id="card-type">
                                    <option value="1">Основная</option>
                                    <option value="2">Дополнительная</option>
                                </select>
                            
                            <p class="card-choice__text">Имя фамилия латинскими буквами (как в паспорте):</p>
                                <label for="customer-name">
                                </label>
                                <input class="card-choice__customer--name" id="customer-name" type="text" name="customer-name" placeholder="Ivan Ivanov">
                    
                        <p class="card-choice__text">Отделение, где вам удобнее забрать карточку:</p>
                                <select class="card-choice__select" id="place-choice">
                                    <option value="">Не выбрано</option>
                                    <option value="1">Головной офис, ул. Краснозвездная, 18</option>
                                    <option value="2">ЦБУ №700, пр-т Независимости, 58 (ТЦ Московско-Венский)</option>
                                    <option value="3">ЦБУ №701, ул. Я. Коласа, 37-4 (Бизнес-центр Айсберг)</option>
                                    <option value="4">ЦБУ №703, Минский район, Щомыслицкий с/с, 42, 1. Западный промузел ТЭЦ-4 (ТЦ Сухарево)</option>
                                    <option value="5">ЦБУ №704, ул. Казимировская, 6 (ТЦ Евроопт)</option>
                                    <option value="6">ЦБУ №100, ул. Пушкинская, 18-15, г. Брест</option>
                                    <option value="7">ЦБУ №602, ул. Минская, 111 (ТЦ Евроопт), г. Бобруйск</option>
                                    <option value="8">ЦБУ № 200, пр-т Московский, 8, г. Витебск</option>
                                    <option value="9">ЦБУ №300, ул. Красноармейская, 34 А, г. Гомель</option>
                                    <option value="10">ЦБУ №400, ул. Большая Троицкая, 17-3, г. Гродно</option>
                                </select>
                            
                            <p class="card-choice__text">Комментарий:</p>
                                <label for="customer-comment"></label>
                                <input class="card-choice__customer--comment" id="customer-comment" type="text" name="customer-comment">
                        
                        <button class="card-choice__button">Начать оформление</button>
                        </form>
                    </section>
                    <section class="card-choice visible" id="design-section">
                        <form>
                            <h2 class="card-choice__text--main">Шаг 2: Создайте дизайн своей карты</h2>
                            <div class="card-choice__design">
                                <div class="card__design design--basic">
                                    <h3>Базовый дизайн</h3>
                                    <img class="card__design--image" src="images/visagold.jpg" width="220" height="100" alt="Базовый дизайн карты">
                                    <p class="desing--conditions-of-issue">Выпуск от 3-х рабочих дней - бесплатно</p>
                                    <button class="button__design--card" id="design-basic">Выбрать</button> 
                                </div>  
                                <div class="card__design design--user">
                                    <h3>Загрузить свое фото</h3>
                                    <img class="card__design--image" src="images/visagold.jpg" width="220" height="100" alt="Базовый дизайн карты">
                                    <p class="desing--conditions-of-issue">Выпуск от 3-х рабочих дней - бесплатно</p>
                                    <button class="button__design--card" id="design-user">Выбрать</button>                  
                                </div>
                            </div>
                        </form>
                    </section>
                    <section class="card-choice visible" id="individual-design-section">
                        <div class="card-choice__example">
                        <h2 class="card-choice__text--main">Создайте дизайн своей карты</h2>
                            <form class="card-choice__user-design" enctype="multipart/form-data" method="post">
                                <input id="card-load" type="file" name="image" width="320" height="200" background-size="cover" multiple accept="image/*" required="required">
                                <div class="card__example front">
                                    <img id="user-image" src="images/card-designer-front.png" width="
                                    320" height="200" background-size="cover" alt="Базовый дизайн карты">
                                </div>
                                <div class="card__example back">
                                    <img id="card_back" src="images/card-designer-back-dark.png" width="
                                    320" height="200" alt="Базовый дизайн карты">           
                                </div>
                                <p class="color-radio__text">Цвет оборотной стороны </p>
                                <div class="card-color-choice">
                                        <!--<input class="color-radio color-radio--red"  type="radio" id="color1" name="#8B0000" value="1">
                                        <label class="visually-hidden" for="color1">Красный</label>
                                        <input class="color-radio color-radio--pink" type="radio" id="color2" name="#FF1493" value="2">
                                        <label class="visually-hidden" for="color2">Розовый</label>
                                        <input class="color-radio color-radio--orange" type="radio" id="color3" name="#FF4500" value="3">
                                        <label class="visually-hidden" for="color3">Оранжевый</label>
                                        <input class="color-radio" type="radio" id="color4" name="#FFFF00" value="4">
                                        <label class="visually-hidden" for="color4">Желтый</label>
                                        <input class="color-radio" type="radio" id="color5" name="#8A2BE2" value="5">
                                        <label class="visually-hidden" for="color5">Фиолетовый</label>
                                        <input class="color-radio" type="radio" id="color6" name="#0000FF" value="6">
                                        <label class="visually-hidden" for="color6">Синий</label>
                                        <input class="color-radio" type="radio" id="color7" name="#708090" value="7">
                                        <label class="visually-hidden" for="color7">Серый</label>
                                        <input class="color-radio" type="radio" id="color8" name="#00FF00" value="8">
                                        <label class="visually-hidden" for="color8">Зеленый</label>-->

                                        <input class="color-button button--red"></button>
                                        <input class="color-button button--pink"></button>
                                        <input class="color-button button--orange"></button>
                                        <input class="color-button button--yellow"></button>
                                        <input class="color-button button--purple"></button>
                                        <input class="color-button button--blue"></button>
                                        <input class="color-button button--grey"></button>
                                        <input class="color-button button--green"></button>
                                    </div>
                                    
                            <button class="button__continue">Продолжить оформление</button>
                        </form>
                        </div>
                    </section>
                    <section class="card-choice visible" id="user-data-section">
                        <div class="personal-data">
                            <h2 class="card-choice__text--main">Шаг 3: Личные данные</h2>
                            <form class="personal-passport-data">
                                <p class="personal-passport-data__title">   Паспортные данные</p>
                                <p>
                                    <label class="clients-form__name" for="document">Тип документа</label>
                                    <select class="card-choice__select" id="document">
                                        <option value="1">Паспорт гражданина РБ</option>
                                        <option value="2">Паспорт иностранного гражданина</option>
                                        <option value="3">Вид на жительство</option>
                                        <option value="4">Другое</option>
                                    </select>
                                </p>
                                <p>
                                    <label class="clients-form__name" for="name">Имя</label>
                                    <input class="card-choice__customer--name" type="text" id="name" name="name" placeholder="Иван">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="last-name">Фамилия</label>
                                    <input class="card-choice__customer--name"  type="text" id="last-name" name="last-name" placeholder="Иванов">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="patronymic">Отчество</label>
                                    <input class="card-choice__customer--name" type="text" id="patronymic" name="patronymic" placeholder="Иванович">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="date-of-birth">Дата рождения</label>
                                    <input class="card-choice__customer--name" type="date" id="-date-of-birth" name="date-of-birth" placeholder="1975-07-22">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="place-of-birth">Место рождения</label>
                                    <input class="card-choice__customer--name" type="text" id="place-of-birth" name="place-of-birth" placeholder="Беларусь, г. Минск">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="passport-series">Серия и номер документа</label>
                                    <input class="card-choice__customer--name" type="text" id="passport-series" name="passport-series" placeholder="KH1234567">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="passport-number">Идентификационный №</label>
                                    <input class="card-choice__customer--name" type="text" id="passport-number" name="passport-number" placeholder="301011975K001PB1">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="authority">Кем выдан</label>
                                    <input class="card-choice__customer--name" type="text" id="authority" name="authority" placeholder="Центральный РУВД г. Минска">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="date-of-issue">Дата выдачи</label>
                                    <input class="card-choice__customer--name" type="date" id="date-of-issue" name="date-of-issue" placeholder="2020-01-02">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="validity-period">Срок действия</label>
                                    <input class="card-choice__customer--name" type="date" id="validity-period" name="validity-period" placeholder="2030-01-02">
                                </p>
                                <p class="personal-passport-data__title">Контактные данные</p>
                                <p>
                                <p>
                                    <label class="clients-form__name" for="email">E-mail</label>
                                    <input class="card-choice__customer--name" type="email" id="email" name="email" placeholder="info.@email.com">
                                </p>
                                <p>
                                    <label class="clients-form__name" for="phone">Мобильный телефон</label>
                                    <input class="card-choice__customer--name" type="tel" id="phone" name="phone" placeholder="+375 29 711-71-71">
                                </p>
                                <p class="personal-passport-data__title">Безопасность</p>
                                <p>
                                    <p>
                                        <label class="clients-form__name" for="code-word">Кодовое слово</label>
                                        <input class="card-choice__customer--name" type="text" id="code-word" name="code-word">
                                    </p>
                                    
                                <button class="button__continue">Оформить карту</button>
                            </form>
                        </div>
                    </section>
                    <section class="card-choice visible" id="card-final">
                        <h2 class="card-choice__text--main">Ваша заявка на карту успешно оформлена.<br>
                        В ближайшее время с вами свяжется сотрудник банка для подтверждения заявки <br>
                        </h2>
                        <img class="bank-employee__image" src="images/оператор.jpg" width=420px height=340px align="center">                          
                    </section>
                </div>      
            </main            
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    
}

export default Cards;