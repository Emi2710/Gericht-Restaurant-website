import images from './images';

const drinks = [
  {
    title: 'Brown Sugar Milk',
    price: '$18',
    tags: '750 ml',
  },
  {
    title: 'Limon Tea',
    price: '$18',
    tags: '750 ml',
  },
  {
    title: 'Lychee Tea',
    price: '$18',
    tags: '750 ml',
  },
  {
    title: 'Coconut Water',
    price: '$20',
    tags: '750 ml',
  },
  {
    title: 'Iced Tea',
    price: '$20',
    tags: '750 ml',
  },
];

const lemonades = [
  {
    title: 'Green Apple',
    price: '$20',
    tags: 'Soda | 30 ml',
  },
  {
    title: "Strawberry",
    price: '$16',
    tags: 'Slice of lime',
  },
  {
    title: 'Cucumber',
    price: '$10',
    tags: 'Citrus juice | Sugar',
  },
  {
    title: 'Blueberry',
    price: '$21',
    tags: 'Soda | 30 ml',
  },
  {
    title: 'Mango',
    price: '$23',
    tags: 'Soda | 30 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { drinks, lemonades, awards };
