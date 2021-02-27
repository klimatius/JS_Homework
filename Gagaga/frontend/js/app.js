import {parseRequestURL} from './helpers/utils.js';
import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';
import Error404 from './views/pages/error404.js';
import WelcomePage from './views/pages/mainPage.js';
import Credits from './views/pages/credits.js';
import Deposits from './views/pages/deposits.js';
import Cards from './views/pages/cards.js';
import Info from './views/pages/info.js';

const Routes = {
    '/': WelcomePage,
    '/deposits': Deposits,
    '/credits': Credits,
    '/cards': Cards,
    '/info': Info

};

function router() {
    const headerContainer = document.getElementsByClassName('header-container')[0],
          contentContainer = document.getElementsByClassName('content-container')[0],
          footerContainer = document.getElementsByClassName('footer-container')[0],
          header = new Header(),
          footer = new Footer();

    header.render().then(html => headerContainer.innerHTML = html);

    const request = parseRequestURL(),
        parsedURL = `/${request.resource || ''}`,
        page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

    page.render().then(html => {
        contentContainer.innerHTML = html;
        page.afterRender();
    });

    footer.render().then(html => footerContainer.innerHTML = html);

}


window.addEventListener('load', router);
window.addEventListener('hashchange', router);