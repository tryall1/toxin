import './room-info.scss'
import '../field-heading/field-heading.scss'
import '../field-input/index'
import '../field-input/field-input.scss'
import '../dropdown/index'
import '../dropdown/dropdown.scss'
import '../button/button.scss'

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

function parseDateFromPlaceholder(inputElement) {

  if (inputElement) {
    const dateString = inputElement.getAttribute('placeholder');
    if (dateString) {
      return new Date(dateString.split('.').reverse().join('-'));
    } else {
      return null;
    }
  } else {
    return null;
  }

}

var startDateInput = document.querySelector('#start_date2');
var endDateInput = document.querySelector('#end_date2');

var button = {
  className: 'custom-button-calendar', 
  content: 'Применить'
};

var arrowPrevHtml = '<svg><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>'; 
var arrowNextHtml = '<svg><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>';

let startDate = parseDateFromPlaceholder(startDateInput);
let endDate = parseDateFromPlaceholder(endDateInput);

let datepicker = new AirDatepicker(startDateInput, {
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd.MM.yyyy',
    prevHtml: arrowPrevHtml,
    nextHtml: arrowNextHtml,
    selectedDates: startDate ? [startDate] : [],
    autoClose: true,
    buttons: ['clear', button],
    onSelect({formattedDate, date}) {
      if (Array.isArray(formattedDate) && formattedDate.length === 2) {
        startDateInput.value = formattedDate[0];
        endDateInput.value = formattedDate[1];
        console.log(changesum(startDateInput.value, endDateInput.value));
      } else {
        console.log(formattedDate)
        startDateInput.value = formattedDate[0] || '';
      }
    }

});

if(endDateInput) {
endDateInput.addEventListener('click', function() {
  let currentStartDate = startDateInput.value;

  //datepicker.clear();
  if (endDate) {
    datepicker.selectDate([currentStartDate, endDate].filter(d => d));
  }

  datepicker.show();
});
}

if(startDateInput) {
startDateInput.addEventListener('click', function() {
  let currentStartDate = startDateInput.value ? new Date(startDateInput.value.split('.').reverse().join('-')) : null;
  let currentEndDate = endDateInput.value ? new Date(endDateInput.value.split('.').reverse().join('-')) : null;

  datepicker.clear();
  if (currentStartDate) {
    datepicker.selectDate([currentStartDate, currentEndDate].filter(d => d));
  }

  datepicker.show();
});
}

// Установка начального значения endDateInput, если обе даты предоставлены
if (startDate && endDate) {
  endDateInput.value = endDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function changesum(startDateInput, endDateInput) {
  const date1 = new Date(startDateInput.split(".").reverse().join("-"));
  const date2 = new Date(endDateInput.split(".").reverse().join("-"));

  // Разница в миллисекундах
  const differenceInTime = date2.getTime() - date1.getTime();

  // Преобразование разницы в миллисекундах в дни
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  // Находим необходимые элементы
  const daysElement = document.querySelector('.room-info__line-left-days');
  const costElement = document.querySelector('.room-info__cost');
  const sumElement = document.querySelector('.room-info__line-right');
  const fullPriceElement = document.querySelector('.room-info__full-price');

  // Проверяем, существуют ли элементы
  if (daysElement && costElement && sumElement && fullPriceElement) {
      const days = Math.abs(differenceInDays);
      daysElement.textContent = days + ' дней';

      // Получаем стоимость за день, очищаем от нечисловых символов и преобразуем в число
      const costPerDay = parseFloat(costElement.textContent.replace(/[^0-9.]/g, ''));

      // Вычисляем общую сумму
      const totalSum = costPerDay * days;
      sumElement.textContent = 'Общая сумма: ' + totalSum + ' ₽';

      // Добавляем 300 рублей и обновляем итоговую цену
      const fullPrice = totalSum + 300;
      fullPriceElement.textContent = fullPrice + ' ₽';
  } else {
      console.error('Один из элементов не найден');
  }
}




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


