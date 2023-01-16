import Page from '../view/page';
import Router from './router';

export default class App {
  view: HTMLElement;

  constructor() {
    this.view = new Page().getPage();
    document.body.appendChild(this.view);

    const content = document.getElementById('content');
    if (content) {
      new Router(content);
    }
  }
}