import './field-input.scss';

import IMask from 'imask';

const element = document.getElementById('field__input-masked');
const maskOptions = {
  mask: Date,
  min: new Date(2022, 9, 13),
};
const mask = IMask(element, maskOptions);