import Page from '../view/page';

class App {
  view: HTMLElement;

  constructor() {
    this.view = new Page().getPage();
    document.body.appendChild(this.view);
  }
}

export default App;