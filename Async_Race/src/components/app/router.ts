import { PageIDs } from '../types';
import GaragePage from '../view/garage/garagePage';
import Winners from '../view/winners/winners';

export default class Router {
  container: HTMLElement;

  constructor(content: HTMLElement) {
    this.container = content;
    this.handlerGlobalRoutes();
    this.changeRouteHandler();
    this.run();
  }

  handlerGlobalRoutes() {
    const garagePage = document.getElementById('garagePage');
    garagePage?.addEventListener('click', () => {
      this.setLocation(PageIDs.GaragePage);
    });
    const winnersPage = document.getElementById('winnersPage');
    winnersPage?.addEventListener('click', () => {
      this.setLocation(PageIDs.WinnersPage);
    });
  }

  renderNewPage(id: PageIDs) {

    this.container?.childNodes.forEach((node) => this.container.removeChild(node));
    let newPage; 

    if (id === PageIDs.GaragePage) {
      newPage = new GaragePage().getPage();

    } else if (id === PageIDs.WinnersPage) {
      newPage = new Winners().getWinners();
    } 

    if (newPage) {
      const pageHTML = newPage;
      this.container.append(pageHTML);
    }
  }

  changeRouteHandler() {
    window.addEventListener('popstate', this.locationHandler.bind(this));
  }

  locationHandler() {
    let location = window.location.pathname;
    if (location.length === 0) {
      location = '/';
    }
    const route = this.recognizeUrl(location);
    this.renderNewPage(route);
  }

  recognizeUrl(url: string): PageIDs {
    if (url === '/') {
      return PageIDs.GaragePage;
    }
    url = url.substring(1);

    if (url.indexOf(PageIDs.WinnersPage) === 0) {
      return PageIDs.WinnersPage;
    }
    return url as PageIDs;
  }

  run() {
    const url = this.recognizeUrl(window.location.pathname);
    if (url !== PageIDs.GaragePage &&
      url !== PageIDs.WinnersPage
    ) {
      this.renderNewPage(url);
    }
  }

  setLocation(page: PageIDs) {
    window.history.pushState({}, '', page);
    this.locationHandler();
  }
}