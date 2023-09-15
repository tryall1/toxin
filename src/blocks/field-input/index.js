import './field-input.scss';

import IMask from 'imask';

// Date validation
const element = document.getElementById('field__input-masked');
const maskOptions = {
  mask: Date,
  min: new Date(2022, 9, 13),
};
const mask = IMask(element, maskOptions);

import AirDatepicker from 'air-datepicker'
import "air-datepicker/air-datepicker.css"

new AirDatepicker('#date_range', {
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd MMM',
    selectedDates: ['2023-08-19','2023-08-23'],
    onShow: function(isFinished) {
      if (isFinished) {
          document.querySelector('.expander').style.transform = 'rotate(180deg)';
      }
    },
    onHide: function(isFinished) {
      if (isFinished) {
          document.querySelector('.expander').style.transform = 'rotate(0deg)';
      }
    },
})

//control arrow direction when calendar is open
$('#date_range').datepicker({
}).data('datepicker')
  .on('show', function() {
    $('#date_range').addClass('calendar-open');
    alert('ok');
  })
  .on('hide', function() {
    $('#date_range').removeClass('calendar-open');
});