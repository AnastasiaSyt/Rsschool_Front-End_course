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

export enum ContainersClassNames {
  GARAGE_PAGE = 'garagePage',
  INPUT_CONTAINER = 'inputs_container',
  INPUT_CONTAINER_BTN = 'inputs_container_buttons',
  GARAGE = 'garage',
  GARAGE_TEXT = 'garage_text_content',
  TITLE = 'title',
  PAGINATION_CONTAINER = 'pagination_container',
}

export enum InputsTypes {
  TEXT = 'text',
  COLOR = 'color',
  SUBMIT = 'submit',
}

export type TButtonInputs = 'create' | 'update';

export enum ButtonTypes {
  DRAW = 'draw',
  RACE = 'race',
}

export enum ButtonsNames {
  race = 'race',
  reset = 'reset',
  generate = 'generate cars',
  prev = 'prev',
  next = 'next',
}