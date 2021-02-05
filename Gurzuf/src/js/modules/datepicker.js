import { Datepicker } from 'vanillajs-datepicker';
import { DateRangePicker } from 'vanillajs-datepicker';
import ru from '../../../node_modules/vanillajs-datepicker/js/i18n/locales/ru.js';

Object.assign(Datepicker.locales, ru);

const elem = document.querySelector('#range-date');
const rangepicker = new DateRangePicker(elem, {
    language: 'ru'
  }); 