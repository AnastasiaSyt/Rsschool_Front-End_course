import Page from '../view/page';
import store from './store';
import GaragePage from '../view/garage/garagePage';
import Winners from '../view/winners/winners';
import { PageIDs } from '../types';

export default class App {
  view: HTMLElement;

  pageInstance: Page;

  constructor() {
    this.pageInstance = new Page(this.updateViewStore.bind(this));
    this.view = this.pageInstance.page;
    document.body.appendChild(this.view);
    this.drawContent();
  }

  drawContent() {
    this.pageInstance.clearContent();
    let newPage;
    const view = store.view;
    if (view === PageIDs.GaragePage) {
      newPage = new GaragePage().pageGarage;
    } else if (view === PageIDs.WinnersPage) {
      newPage = new Winners().pageWinners;
    }
    if (newPage) {
      const content = this.pageInstance.content;
      content.appendChild(newPage);
    }
  }

  updateViewStore(view: PageIDs): void {
    store.view = view;
    this.drawContent();
  }
}