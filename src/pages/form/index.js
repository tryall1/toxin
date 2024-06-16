import './form.scss';
import '../../blocks/field-heading';
import '../../blocks/field-input';
import '../../blocks/dropdown';
import '../../blocks/checkbox-buttons';
import '../../blocks/radio-buttons';
import '../../blocks/toggle';
import '../../blocks/like-button';
import '../../blocks/rating';
import '../../blocks/range-slider';
import '../../blocks/button';
import '../../blocks/pagination';
import '../../blocks/bullet';
import '../../blocks/pros';
import '../../blocks/review';

import IMask from 'imask'

//Data mask
const maskOptions = {
    mask: Date,
    min: new Date(2022, 9, 13),
};

const birthday = document.getElementById('field__input-masked');
new IMask(birthday, {
    mask: Date,
});

//Date range validation
const first_date = document.getElementById('start_date');
new IMask(first_date, maskOptions);
const end_date = document.getElementById('end_date');
new IMask(end_date, maskOptions);

var options = {
    setSelectionText: (itemCount, totalItems) => {
        return itemCount.bedrooms+' cпальни, '+ itemCount.beds +' кровати...'
    },
}
$(document).ready(function() {
    // Инициализация iqdropdown
    $('#dropdown').iqDropdown(options);
    $('#dropdown-open').iqDropdown(options);
    $('#dropdown-open').addClass('menu-open');
});

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

$(document).ready(function() {
    $('#dropdown_guest').iqDropdown(options_guest);
    //$('#dropdown-guest-empty').iqDropdown(options_guest);
    $('#dropdown-guest-empty-2').iqDropdown(options_guest);
});

