import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import './dropdown.scss';

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

    $('#dropdown-guest-empty').iqDropdown(options_guest);
});