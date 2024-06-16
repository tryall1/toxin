import './room-search.scss'
import '../../blocks/header'
import '../../blocks/footer'
import '../../blocks/field-heading'
import '../../blocks/field-input'
import '../../blocks/dropdown'
import '../../blocks/range-slider'
import '../../blocks/checkbox-buttons';
//import '../../blocks/room-search';


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

    var options = {
        setSelectionText: (itemCount, totalItems) => {
            return itemCount.bedrooms+' cпальни, '+ itemCount.beds +' кровати...'
        },
    }

    $('#dropdown_guest').iqDropdown(options_guest);
    $('#dropdown').iqDropdown(options);
});

