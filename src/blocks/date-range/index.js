import '../field-input/index'
import '../field-input/field-input.scss'
import './date-range.scss'
import AirDatepicker from 'air-datepicker'
import "air-datepicker/air-datepicker.css"

//Datepicker for date range and two inputs
var button = {
  className: 'custom-button-calendar', 
  content: 'Применить',
}

new AirDatepicker('#date_range2', {
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd MMM',
    autoClose: true,
    selectedDates: ['2023-11-19','2023-11-23'],
    buttons: ['clear', button],
    prevHtml: '<svg><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
    nextHtml: '<svg><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',

    onShow: function(isFinished) {
      if (isFinished) {
          document.querySelector('.expander').style.transform = 'rotate(180deg)'; //doesn't work correctly
      }
    },
    onHide: function(isFinished) {
      if (isFinished) {
          document.querySelector('.expander').style.transform = 'rotate(0deg)';
      }
    },
})