import './styles/winners.css';
import store from '../../app/store';
import ControllerWinners from '../../controllers/controllerWinners';
import { TData } from '../../models/typesModel';
import Pagination from '../elements/pagination';
import { coloredCarImgSmall } from '../cars/car';

export default class Winners {

  page: number;

  winnersPageCount: number;

  #winners: HTMLDivElement;

  #title: HTMLParagraphElement;

  #winnersTableContainer: HTMLTableSectionElement;

  controllerWinners: ControllerWinners;

  pagination: Pagination;

  #pageNumber: HTMLParagraphElement;

  constructor() {
    this.#winnersTableContainer = this.getTableBody();
    this.winnersPageCount = store.winnersPage;
    this.controllerWinners = new ControllerWinners();
    this.page = store.winnersPage;
    
    this.pagination = new Pagination(() => {
      this.updatePageNumber();
      this.loadWinners();
    }, 'winners');
    
    this.#pageNumber = this.getWinnersPage();
    this.#title = this.getWinnersTitle();
    this.#winners = this.getWinners();
    this.updateTitle();
    this.loadWinners();
  }

  get pageWinners(): HTMLDivElement {
    return this.#winners;
  }

  updateTitle(): void {
    this.controllerWinners.count.then((count) => {
      const winnersCurrentCount = `Winners(${count})`;
      this.#title.textContent = winnersCurrentCount;
    });
  }

  updateTableWinners(data: TData[]): void {
    while (this.#winnersTableContainer.lastElementChild) {
      this.#winnersTableContainer.removeChild(this.#winnersTableContainer.lastElementChild);
    }
    data.forEach((element: TData, index: number) => {
      let number;
      const currentPage = store.winnersPage;
      if (currentPage === 1) {
        number = index;
      } else {
        number = index + (currentPage - 1) * 10;
      }
      const tableString = this.getTableString(element, number);
      this.#winnersTableContainer.appendChild(tableString);
    });
    this.pagination.updatePageButtons();
  }

  loadWinners(): void {
    this.controllerWinners.getRowData(this.updateTableWinners.bind(this), store.winnersPage);
  }

  updatePageNumber(): void {
    this.#pageNumber.textContent = `Page #${store.winnersPage}`;
  }
  
  getWinners() {
    const winners = document.createElement('div');
    winners.classList.add('winners_content');

    const winnersTextContent = this.getWinnersTextContent();
    winners.appendChild(winnersTextContent);

    winners.appendChild(this.getWinnersTable());

    const pagination = this.pagination.getPagination();
    winners.appendChild(pagination);

    return winners;
  }

  private getWinnersTextContent() {
    const winnersTextContent = document.createElement('div');
    winnersTextContent.classList.add('winners_text_content');
    winnersTextContent.appendChild(this.#title);
    winnersTextContent.appendChild(this.#pageNumber);
    return winnersTextContent;
  }

  private getWinnersPage() {
    const page = document.createElement('p');
    page.classList.add('page');
    page.textContent = `Page #${this.page}`;
    return page;
  }

  private getWinnersTitle(): HTMLParagraphElement {
    const title = document.createElement('p');
    title.classList.add('title');
    return title;
  }

  private getWinnersTable() {
    const table = document.createElement('table');
    table.classList.add('winners_table');

    const tableHeaderTitle = this.getTableHeader();
    table.appendChild(tableHeaderTitle);

    table.appendChild(this.#winnersTableContainer);

    return table;
  }

  private getTableBody(): HTMLTableSectionElement {
    const tableBody = document.createElement('tbody');
    tableBody.classList.add('table_body');
    return tableBody;
  }

  private getTableHeader() {
    const tableHeader = document.createElement('tr');
    tableHeader.classList.add('table_header');

    const tableTitles = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];
    tableTitles.forEach(title => {
      const headerTitle = this.getHeaderTitle(title);
      tableHeader.appendChild(headerTitle);
    });

    return tableHeader;
  }

  private getHeaderTitle(title: string):  HTMLTableCellElement {
    const tableHeaderTitle = document.createElement('th');
    tableHeaderTitle.classList.add('table_header_title');
    tableHeaderTitle.textContent = title;
    return tableHeaderTitle;
  }

  private getTableString(elem: TData, index: number) {
    const tableString = document.createElement('tr');
    tableString.classList.add('table_string');
    this.getCells(String(index + 1), elem.color, elem.name, String(elem.wins), String(elem.time), tableString);
    // const cells = Object.values(elem);
    // cells.forEach(text => {
    //   const cell = this.getTableStringText(String(text));
    //   tableString.appendChild(cell);
    // });
    
    return tableString;
  }

  private getCells(num: string, color: string | undefined, winsName: string | undefined, win: string | undefined, time: string | undefined, node: Node) {
    const number = this.getTableStringText(num);
    node.appendChild(number);
    const car = this.getTableStringText('', color);
    node.appendChild(car);
    const carName = this.getTableStringText(winsName);
    node.appendChild(carName);
    const wins = this.getTableStringText(win);
    node.appendChild(wins);
    const bestTime = this.getTableStringText(time);
    node.appendChild(bestTime);
  }

  private getTableStringText(content?: string, color?: string): HTMLTableCellElement {
    const stringText = document.createElement('td');
    stringText.classList.add('string_text');
    if (content) {
      stringText.textContent = content;
    }
    if (color) {
      const car = this.getCarImage(color);
      stringText.appendChild(car);
    }
    return stringText;
  }

  private getCarImage(color:string) {
    const car = document.createElement('div');
    car.classList.add('car_small');
    car.insertAdjacentHTML('beforeend', coloredCarImgSmall(color));
    return car;
  }
}