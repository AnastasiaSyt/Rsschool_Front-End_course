import ControllerGarage from '../../controllers/controllerGarage';
import { ButtonsNames, ButtonTypes, ContainersClassNames } from '../../types';
import Button from './buttons';
import store from '../../app/store';

export default class Pagination {
  onPageChange: () => void;

  page: number;

  prevButton: Button;

  nextButton: Button;

  controller: ControllerGarage;

  constructor(onPageChange: () => void) {
    this.onPageChange = onPageChange;
    this.controller = new ControllerGarage();
    this.page = store.garagePage;

    this.prevButton = new Button(ButtonsNames.prev, ButtonTypes.DRAW);
    (this.prevButton as Node).addEventListener('click', () => this.changePage(ButtonsNames.prev));

    this.nextButton = new Button(ButtonsNames.next, ButtonTypes.DRAW);
    (this.nextButton as Node).addEventListener('click', () => this.changePage(ButtonsNames.next));
    this.updatePageButtons();
  }

  getPagination() {
    const pagination = document.createElement('div');
    pagination.classList.add(ContainersClassNames.PAGINATION_CONTAINER);
    pagination.appendChild(this.prevButton as Node);
    pagination.appendChild(this.nextButton as Node);
    return pagination;
  }

  changePage(type?: string) {
    const startPage = 1;
    if (type === ButtonsNames.prev) {
      if (store.garagePage > startPage) 
        store.garagePage -= 1;
    }

    if (type === ButtonsNames.next) 
      store.garagePage += 1;

    this.updatePageButtons();
    
    this.onPageChange();
    console.log(store.garagePage);
    return store.garagePage;
  }


  async updatePageButtons() {
    const totalCount = await this.controller.carsCount();
    this.updatePrevButton();
    this.updateNextButton(totalCount);
  }
  
  updatePrevButton(): void {
    if (store.garagePage === 1) {
      this.addDisabled(this.prevButton as HTMLElement, true);
    } else {
      this.addDisabled(this.prevButton as HTMLElement, false);
    }
  }

  updateNextButton(totalCount: number, limit = 7): void {
    if (store.garagePage > totalCount / limit) {
      this.addDisabled(this.nextButton as HTMLElement, true);
    } else {
      this.addDisabled(this.nextButton as HTMLElement, false);
    }
  }

  addDisabled(element: HTMLElement, type = false): void {
    element.toggleAttribute('disabled', type);
  }
}
