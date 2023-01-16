import { TableElementConfig, Tags } from '../../types';
import Pagination from '../pagination';
import './winners.css';

export default class Winners {
  getWinners() {
    const count = 0;
    const countPage = 1;

    const winners = document.createElement('div');
    winners.classList.add('winners_content');

    const winnersTextContent = document.createElement('div');
    winnersTextContent.classList.add('winners_text_content');
    winners.appendChild(winnersTextContent);

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = `Winners(${count})`;
    winnersTextContent.appendChild(title);

    const page = document.createElement('p');
    page.classList.add('page');
    page.textContent = `Page #${countPage}`;
    winnersTextContent.appendChild(page);

    //const table = this.getWinnersTable();
    winners.appendChild(this.getWinnersTable());

    const pagination = new Pagination();
    winners.appendChild(pagination as Node);

    return winners;
  }

  getWinnersTable() {
    const table = document.createElement('table');
    table.classList.add('winners_table');
    this.drawItems(table, this.getDOMTableElements());
    return table;
  }

  drawItems(parent: HTMLElement, configs: TableElementConfig[]) {
    configs.forEach((config) => {
      const node = this.createElement(config);
      if (config.children) {
        this.drawItems(node, config.children);
      }
      parent.appendChild(node);
    });
  }

  createElement(config: TableElementConfig): HTMLElement {
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

  getDOMTableElements(): TableElementConfig[] {
    const modalDOMElements: TableElementConfig[] =
      [
        {
          tag: Tags.TR,
          classes: ['table_header'],
          children: [
            {
              tag: Tags.TH,
              classes: ['table_header_title'],
              label: 'Number',
            },
            {
              tag: Tags.TH,
              classes: ['table_header_title'],
              label: 'Car',
            },
            {
              tag: Tags.TH,
              classes: ['table_header_title'],
              label: 'Name',
            },
            {
              tag: Tags.TH,
              classes: ['table_header_title'],
              label: 'Wins',
            },
            {
              tag: Tags.TH,
              classes: ['table_header_title'],
              label: 'Best time (seconds)',
            },
          ],
        },
        {
          tag: Tags.TR,
          classes: ['table_string'],
          children: [
            {
              tag: Tags.TH,
              classes: ['string_text'],
              label: '1',
            },
            {
              tag: Tags.TH,
              classes: ['string_text'],
              label: 'image',
            },
            {
              tag: Tags.TH,
              classes: ['string_text'],
              label: 'Tesla',
            },
            {
              tag: Tags.TH,
              classes: ['string_text'],
              label: '1',
            },
            {
              tag: Tags.TH,
              classes: ['string_text'],
              label: '10',
            },
          ],
        },
      ];
    return modalDOMElements;
  }
}