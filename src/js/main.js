import refs from './refs.js';  //импорт доступов
import fetchCountries from './fetchCountries.js';
import updateCountriesMarkup from './updateCountriesMarkup.js';
import debounce from 'lodash.debounce';
const { outputQuery, inputRef } = refs; //деструк доступов с дефолтного экспорта

const debounceInputCb = debounce(() => {

  const inputValue = inputRef.value;
  // console.log(inputValue);

  outputQuery.innerHTML = '';
  
  fetchCountries(inputValue);
}, 500)

inputRef.addEventListener('input', debounceInputCb);
