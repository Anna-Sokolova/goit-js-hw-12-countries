import markupForListCountry from '../templates/markupForListCountry.hbs';
import markupForOneCountry from '../templates/markupForOneCountry.hbs';
import refs from './refs.js';
const { outputQuery } = refs;

export function updateCountriesMarkup(data) {
  const markupRef = markupForListCountry(data);
  outputQuery.insertAdjacentHTML('beforeend', markupRef);
}

export function updateOneCountryMarkup(data) {
  const markupRef = markupForOneCountry(data);
  outputQuery.insertAdjacentHTML('beforeend', markupRef);
}
