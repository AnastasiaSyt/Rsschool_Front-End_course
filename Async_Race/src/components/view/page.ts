import Button from './elements/buttons';
import './elements/style/navigation.css';
import { PageIDs } from '../types';

export default class Page {
  #baseView: HTMLDivElement;

  #main: HTMLElement;

  #content: HTMLDivElement;

  onNavigateClick: (id: PageIDs) => void;

  constructor(onNavigateClick: (id: PageIDs) => void) {
    this.#baseView = this.createBase();
    this.#content = this.createContent();
    this.#main = this.createMain();
    this.createPage();

    this.onNavigateClick = onNavigateClick;
  }

  get page(): HTMLDivElement {
    return this.#baseView;
  }

  get content(): HTMLDivElement {
    return this.#content;
  }

  clearContent() {
    this.#content.childNodes.forEach((node) => this.#content.removeChild(node));
  }

  private createPage(): void {
    const header = this.createHeader();
    this.#baseView.appendChild(header);
    this.#baseView.appendChild(this.#main);
  }

  private createBase(): HTMLDivElement {
    return document.createElement('div');
  }

  private createHeader(): HTMLElement {
    const wrapper = this.createWrapper();
    const header = document.createElement('header');
    header.classList.add('header');
    header.appendChild(wrapper);
    return header;
  }

  private createWrapper(): HTMLDivElement {
    const logo = this.createLogo();
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.appendChild(logo);
    return wrapper;
  }

  private createLogo(): HTMLImageElement {
    const logo = document.createElement('img');
    logo.src = '../../assets/logo.svg';
    logo.classList.add('header_logo');
    logo.id = `${PageIDs.GaragePage}`;
    return logo;
  }

  private createMain(): HTMLElement {
    const main = document.createElement('main');
    main.id = 'main';
    main.classList.add('wrapper');
    main.appendChild(this.getNavigation());
    main.appendChild(this.#content);
    return main;
  }

  private createContent(): HTMLDivElement {
    const content = document.createElement('div');
    content.id = 'content';
    return content;
  }

  private getNavigation() {
    const navigation = document.createElement('div');
    navigation.classList.add('navigation');

    const toGarage = this.getGarageButton();
    navigation.appendChild(toGarage as Node);

    const toWinners = this.getWinnersButton();
    navigation.appendChild(toWinners as Node);

    return navigation;
  }

  private getGarageButton() {
    const toGarage = new Button('to garage', 'race', '', 'garagePage');

    (toGarage as Node).addEventListener('click', () => {
      this.onNavigateClick(PageIDs.GaragePage);
    });
    return toGarage;
  }

  private getWinnersButton() {
    const toWinners = new Button('to winners', 'race', '', 'winnersPage');

    (toWinners as Node).addEventListener('click', () => {
      this.onNavigateClick(PageIDs.WinnersPage);
    });
    return toWinners;
  }
}