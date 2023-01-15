import Button from './buttons';
import GaragePage from './garage/garagePage';
import './navigation.css';

export default class Page {
  getPage(pageName?: string): HTMLElement {
    const page = document.createElement('div');
    if (pageName) {
      page.classList.add(pageName);
    }

    const header = document.createElement('header');
    header.classList.add('header');
    page.appendChild(header);

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    header.appendChild(wrapper);

    const logo = document.createElement('img');
    logo.src = '../../assets/logo.svg';
    logo.classList.add('header_logo');
    wrapper.appendChild(logo);

    const main = document.createElement('main');
    main.classList.add('main_garage');
    main.classList.add('wrapper');
    main.appendChild(this.getNavigation());

    const garageInputs = new GaragePage().getInputs();
    main.appendChild(garageInputs);

    const garage = new GaragePage().getGarage();
    main.appendChild(garage);

    page.appendChild(main);

    return page;
  }

  getNavigation() {
    const navigation = document.createElement('div');
    navigation.classList.add('navigation');

    const toGarage = new Button('to garage', 'race');
    navigation.appendChild(toGarage as Node);
    console.log(toGarage);

    const toWinners = new Button('to winners', 'race');
    navigation.appendChild(toWinners as Node);
    console.log(navigation);

    return navigation;
  }
}