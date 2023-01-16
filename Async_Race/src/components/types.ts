export type TableElementConfig = {
  tag: Tags,
  classes: string[],
  src?: string,
  label?: string,
  children?: TableElementConfig[],
  id?: string,
  type?: string,
  attribute?: [string, string],
  placeholder?: string,
  pattern?: string,
  title?: string
};

export enum Tags {
  IMG = 'img',
  DIV = 'div',
  P = 'p',
  INPUT = 'input',
  LABEL = 'label',
  FORM = 'form',
  TABLE = 'table',
  TR = 'tr',
  TH = 'th',
  TD = 'td',
}

export enum PageIDs {
  GaragePage = 'garagePage',
  WinnersPage = 'winnersPage',
}
