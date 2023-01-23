import './styles/winners.css';
import store from '../../app/store';
import ControllerWinners from '../../controllers/controllerWinners';
import { TData } from '../../models/typesModel';

export default class Winners {
  //winnersCount: number;

  winnersPageCount: number;

  #winners: HTMLDivElement;

  #title: HTMLParagraphElement;

  #winnersTableContainer: HTMLTableSectionElement;

  controllerWinners: ControllerWinners;

  constructor() {
    this.#winnersTableContainer = this.getTableBody();
    //this.winnersCount = store.winnersCount;
    this.winnersPageCount = store.winnersPage;
    this.controllerWinners = new ControllerWinners();
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
    console.log(data);
    data.forEach((element: TData) => {
      const tableString = this.getTableString(element);
      console.log(tableString);
      this.#winnersTableContainer.appendChild(tableString);
    });
  }

  loadWinners(): void {
    this.controllerWinners.getRowData(this.updateTableWinners.bind(this));
  }
  
  getWinners() {
    const winners = document.createElement('div');
    winners.classList.add('winners_content');

    const winnersTextContent = this.getWinnersTextContent();
    winners.appendChild(winnersTextContent);

    winners.appendChild(this.getWinnersTable());

    //const pagination = new Pagination().getPagination();
    //winners.appendChild(pagination);

    return winners;
  }

  private getWinnersTextContent() {
    const winnersTextContent = document.createElement('div');
    winnersTextContent.classList.add('winners_text_content');

    winnersTextContent.appendChild(this.#title);

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

  private getTableString(elem: TData) {
    const tableString = document.createElement('tr');
    tableString.classList.add('table_string');
    const cells = Object.values(elem);
    cells.forEach(text => {
      const cell = this.getTableStringText(String(text));
      tableString.appendChild(cell);
    });
    return tableString;
  }

  private getTableStringText(content: string): HTMLTableCellElement {
    const stringText = document.createElement('td');
    stringText.classList.add('string_text');
    stringText.textContent = content;
    return stringText;
  }
}