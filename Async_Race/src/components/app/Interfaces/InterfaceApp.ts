import { PageIDs } from '../../types';
import Page from '../../view/page';

export default interface IApp {
  view: HTMLElement,
  pageInstance: Page,
  drawContent(): void,
  updateViewStore(view: PageIDs): void,
}