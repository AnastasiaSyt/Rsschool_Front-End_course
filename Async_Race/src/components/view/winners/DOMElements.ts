import { TableElementConfig, Tags } from '../../types';

export const DOMElements: TableElementConfig[] =
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