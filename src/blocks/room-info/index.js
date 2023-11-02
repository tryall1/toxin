import './room-info.scss'
import '../field-heading/field-heading.scss'
import '../field-input/index'
import '../field-input/field-input.scss'
import '../dropdown/index'
import '../dropdown/dropdown.scss'
import '../button/button.scss'

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';


//Datepicker for date range and two inputs
var button = {
    className: 'custom-button-calendar', 
    content: 'Применить',
}

var startDate = document.querySelector('#start_date2');

// Получить значение атрибута placeholder
var startDateValue = startDate.getAttribute('placeholder');

//Several inputs in date picker
let startDatepicker = new AirDatepicker(startDate, {
  multipleDatesSeparator: ' - ',
  dateFormat: 'dd.MM.yyyy',
  selectedDates: startDateValue,
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


var endDate = document.querySelector('#end_date2');

// Получить значение атрибута placeholder
var endDateValue = endDate.getAttribute('placeholder');

let endDatepicker = new AirDatepicker(endDate, {
  dateFormat: 'dd.MM.yyyy',
  prevHtml: '<svg><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
  nextHtml: '<svg><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
  range: true, 
  selectedDates: endDateValue,
  autoClose: true,
  buttons: ['clear', button],
  onSelect({date}) {
    if(date.length===2) {
      endDatepicker.selectDate(endDatepicker.selectedDates[1]); //selecting only one(last) date in input
    }
  }
});

$(document).ready(function() {
    // Инициализация iqdropdown
    var options_guest = {
        setSelectionText: function setSelectionText(itemCount, totalItems) {
            if (totalItems === 0) {
                return 'Сколько гостей';
            } else {
                let lastDigit = totalItems % 10;
                let lastTwoDigits = totalItems % 100;
                if (lastDigit === 1 && lastTwoDigits !== 11) {
                    return totalItems + ' гость';
                } else if ((lastDigit >= 2 && lastDigit <= 4) && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
                    return totalItems + ' гостя';
                } else {
                    return totalItems + ' гостей';
                }
            }
        }
    }

    $('#dropdown-guest').iqDropdown(options_guest);
});


