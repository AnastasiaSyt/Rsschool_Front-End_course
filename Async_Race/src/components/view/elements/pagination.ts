import ControllerGarage from '../../controllers/controllerGarage';
import { ButtonsNames, ButtonTypes, ContainersClassNames } from '../../types';
import Button from './buttons';

export default class Pagination {
  page: number;

  prevButton: Button;

  nextButton: Button;

  controller: ControllerGarage;

  constructor() {
    this.controller = new ControllerGarage();
    this.page = 1;

    this.prevButton = new Button(ButtonsNames.prev, ButtonTypes.DRAW);
    (this.prevButton as Node).addEventListener('click', () => this.changePage(ButtonsNames.prev));

    this.nextButton = new Button(ButtonsNames.next, ButtonTypes.DRAW);
    (this.nextButton as Node).addEventListener('click', () => this.changePage(ButtonsNames.next));
  }

  getPagination() {
    const pagination = document.createElement('div');
    pagination.classList.add(ContainersClassNames.PAGINATION_CONTAINER);
    pagination.appendChild(this.prevButton as Node);
    pagination.appendChild(this.nextButton as Node);
    return pagination;
  }

  async changePage(type: string) {
    const startPage = 1;
    if (type === ButtonsNames.prev) {
      if (this.page > startPage) 
        this.page -= 1;
    }

    if (type === ButtonsNames.next) 
      this.page += 1;

    this.updatePageBtn();
    console.log(this.page);
    return this.page;
  }


  async updatePageBtn() {
    // const page = document.getElementById('page');
    // const numberOfPage = `Page #${this.page}`;
    // if (page) {
    //   page.textContent = numberOfPage;
    // }

    const totalCount = await this.controller.carsCount();
    
    this.updatePrevButton();
    this.updateNextButton(this.page, totalCount);
  }
  
  updatePrevButton(): void {
    if (this.page === 1) {
      this.addDisabled(this.prevButton as HTMLElement, true);
    } else {
      this.addDisabled(this.prevButton as HTMLElement, false);
    }
  }

  updateNextButton(page: number, totalCount: number, limit = 7): void {
    if (page > totalCount / limit) {
      this.addDisabled(this.nextButton as HTMLElement, true);
    } else {
      this.addDisabled(this.nextButton as HTMLElement, false);
    }
  }

  addDisabled(element: HTMLElement, type = false): void {
    element.toggleAttribute('disabled', type);
  }
}
