import { notificationError, notificationAlert } from './notifications.js';
import {
  updateCountriesMarkup,
  updateOneCountryMarkup,
} from './updateCountriesMarkup.js';
import refs from './refs.js';
const { divWrapStyle } = refs;

function fetchCountries(name) {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  divWrapStyle.style.backgroundColor = 'transparent';

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return notificationAlert('Введите корректные данные запроса');
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        return notificationError(
          'Опаньки! Сделайте более корректный запрос! Мы ждем...',
        );
      }
      if (data.length >= 2 && data.length <= 10) {
        divWrapStyle.style.backgroundColor = 'rgb(233, 226, 198)';
        return updateCountriesMarkup(data);
      }
      if (data.length === 1) {
        divWrapStyle.style.backgroundColor = 'rgb(233, 226, 198)';
        return updateOneCountryMarkup(data);
      }
    })
    .catch(error => error);
}

export default fetchCountries;
