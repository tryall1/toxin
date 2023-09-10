import './scss/main.scss'
import './scss/ui.scss'

import AirDatepicker from 'air-datepicker'
import "air-datepicker/air-datepicker.css";

new AirDatepicker('#date_range', {
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd MMM',
    selectedDates: ['2023-08-19','2023-08-23']
})