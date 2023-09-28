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

var options = {
    // optionally can use setSelectionText function to override selectionText
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
    $('#dropdown-guest-empty-2').iqDropdown(options_guest);
    $('#dropdown-guest-empty').iqDropdown(options_guest);
});


