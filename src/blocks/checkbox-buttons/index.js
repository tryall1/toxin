import './checkbox-buttons.scss';
import '../field-heading/index';

$(document).ready(function() {
    $('.expandable-buttons').on('click', function() {
        $(this).toggleClass('expandable-buttons--open');
    });
});

$(document).ready(function() {
    $('.expandable-buttons').eq(1).addClass('expandable-buttons--open');
});
