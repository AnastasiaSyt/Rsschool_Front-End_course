import ControllerGarage from '../../controllers/controllerGarage';
import { ButtonsNames, ButtonTypes, ContainersClassNames } from '../../types';
import Button from './buttons';
import store from '../../app/store';
import ControllerWinners from '../../controllers/controllerWinners';

export default class Pagination {
  onPageChange: () => void;

  prevButton: Button;

  nextButton: Button;

  controller!: ControllerGarage | ControllerWinners;

  limit!: number;

  constructor(onPageChange: () => void, view: 'garage' | 'winners') {
    this.onPageChange = onPageChange;
    
    if (view === 'garage') {
      this.controller = new ControllerGarage();
      this.limit = 7;

    } else if (view === 'winners') {
      this.controller = new ControllerWinners();
      this.limit = 10;
    }

    this.prevButton = new Button(ButtonsNames.prev, ButtonTypes.DRAW, 'bottom_button');
    (this.prevButton as Node).addEventListener('click', () => this.changePage(ButtonsNames.prev));

    this.nextButton = new Button(ButtonsNames.next, ButtonTypes.DRAW, 'bottom_button');
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
    if (this.limit === 7) {
      if (type === ButtonsNames.prev) {
        if (store.garagePage > startPage) 
          store.garagePage -= 1;
      }
  
      if (type === ButtonsNames.next) 
        store.garagePage += 1;
    } else {
      if (type === ButtonsNames.prev) {
        if (store.winnersPage > startPage) 
          store.winnersPage -= 1;
      }
  
      if (type === ButtonsNames.next) 
        store.winnersPage += 1;
    }
    this.updatePageButtons();
    this.onPageChange();
  }


  async updatePageButtons() {
    const totalCount = await this.controller.count;
    this.updatePrevButton();
    this.updateNextButton(totalCount);
  }
  
  updatePrevButton(): void {
    if (this.limit === 7) {
      if (store.garagePage === 1) {
        this.addDisabled(this.prevButton as HTMLElement, true);
      } else {
        this.addDisabled(this.prevButton as HTMLElement, false);
      }
    } else {
      if (store.winnersPage === 1) {
        this.addDisabled(this.prevButton as HTMLElement, true);
      } else {
        this.addDisabled(this.prevButton as HTMLElement, false);
      }
    }
  }

  updateNextButton(totalCount: number): void {
    if (this.limit === 7) {
      if (store.garagePage > totalCount / this.limit) {
        this.addDisabled(this.nextButton as HTMLElement, true);
      } else {
        this.addDisabled(this.nextButton as HTMLElement, false);
      }
    } else {
      if (store.winnersPage > totalCount / this.limit) {
        this.addDisabled(this.nextButton as HTMLElement, true);
      } else {
        this.addDisabled(this.nextButton as HTMLElement, false);
      }
    }
  }

  addDisabled(element: HTMLElement, type = false): void {
    element.toggleAttribute('disabled', type);
  }
}
