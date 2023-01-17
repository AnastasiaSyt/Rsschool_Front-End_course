import Button from './buttons';

export default class Pagination {
  constructor() {
    const pagination = document.createElement('div');
    pagination.classList.add('pagination_container');

    const prevButton = new Button('prev', 'draw');
    pagination.appendChild(prevButton as Node);

    const nextButton = new Button('next', 'draw');
    pagination.appendChild(nextButton as Node);

    return pagination;
  }
}