
import IMask from 'imask'
import AirDatepicker from 'air-datepicker'
import "air-datepicker/air-datepicker.css"

//Data mask
const maskOptions = {
  mask: Date,
  min: new Date(2022, 9, 13),
};

const first_date = document.getElementById('start_date');
new IMask(first_date, maskOptions);

const end_date = document.getElementById('end_date');
new IMask(end_date, maskOptions);


//Datepicker for date range and two inputs

var button = {
  className: 'custom-button-calendar', 
  content: 'Применить',
}

new AirDatepicker('#date_range', {
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd MMM',
    autoClose: true,
    selectedDates: ['2023-08-19','2023-08-23'],
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

//Several inputs in date picker
let startDatepicker = new AirDatepicker('#start_date', {
  multipleDatesSeparator: ' - ',
  dateFormat: 'dd.MM.yyyy',
  buttons: ['clear', button],
  range: false,
  prevHtml: '<svg><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
  nextHtml: '<svg><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',

  //updating minimum date in second calendar input
  onSelect({date}) {
    
    endDatepicker.selectDate(startDatepicker.selectedDates[0]);
    startDatepicker.hide();
    endDatepicker.show();

    endDatepicker.update({
        minDate: date
    })
  }
});

let endDatepicker = new AirDatepicker('#end_date', {
  dateFormat: 'dd.MM.yyyy',
  prevHtml: '<svg><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
  nextHtml: '<svg><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
  range: true, 
  selectedDates: ['2023-08-19'],
  autoClose: true,
  buttons: ['clear', button],
  onSelect({date}) {
    if(date.length===2) {
      endDatepicker.selectDate(endDatepicker.selectedDates[1]); //selecting only one(last) date in input
    }
  }
});

import './field-input.scss';