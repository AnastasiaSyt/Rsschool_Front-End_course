import { TableElementConfig } from '../../types';
import Pagination from '../elements/pagination';
import { DOMElements } from './DOMElements';
import './styles/winners.css';
import store from '../../app/store';

export default class Winners {
  winnersCount: number;

  winnersPageCount: number;

  #winners: HTMLDivElement;

  constructor() {
    this.winnersCount = store.winnersCount;
    this.winnersPageCount = store.winnersPage;
    this.#winners = this.getWinners();
  }

  get pageWinners(): HTMLDivElement {
    return this.#winners;
  }
  
  private getWinners() {
    const winners = document.createElement('div');
    winners.classList.add('winners_content');

    const winnersTextContent = this.getWinnersTextContent();
    winners.appendChild(winnersTextContent);

    winners.appendChild(this.getWinnersTable());

    const pagination = new Pagination().getPagination();
    winners.appendChild(pagination);

    return winners;
  }

  private getWinnersTextContent() {
    const winnersTextContent = document.createElement('div');
    winnersTextContent.classList.add('winners_text_content');

    const title = this.getWinnersTitle();
    winnersTextContent.appendChild(title);

    const pages = this.getWinnersPage();
    winnersTextContent.appendChild(pages);

    return winnersTextContent;
  }

  private getWinnersPage() {
    const page = document.createElement('p');
    page.classList.add('page');
    page.textContent = `Page #${this.winnersPageCount}`;
    return page;
  }

  private getWinnersTitle() {
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = `Winners(${this.winnersCount})`;
    return title;
  }

  private getWinnersTable(): HTMLTableElement {
    const table = document.createElement('table');
    table.classList.add('winners_table');
    this.drawItems(table, this.getDOMTableElements());
    return table;
  }

  private drawItems(parent: HTMLElement, configs: TableElementConfig[]): void {
    configs.forEach((config) => {
      const node = this.createElement(config);
      if (config.children) {
        this.drawItems(node, config.children);
      }
      parent.appendChild(node);
    });
  }

  private createElement(config: TableElementConfig): HTMLElement {
    const node = document.createElement(config.tag);
    config.classes.forEach((className) => {
      node.classList.add(className);
    });
    if (config.label) {
      node.textContent = config.label;
    }
    if (config.id) {
      (node as HTMLElement).id = config.id;
    }
    return node;
  }

  private getDOMTableElements(): TableElementConfig[] {
    const modalDOMElements: TableElementConfig[] = DOMElements;
    return modalDOMElements;
  }
}