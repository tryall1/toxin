import 'nouislider/dist/nouislider.css';
import './range-slider.scss'

import noUiSlider from 'nouislider'

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    },
    step: 100,
});

var nonLinearStepSliderValueElement = document.getElementById('slider_js');

slider.noUiSlider.on('update', function (values) {
    values = values.map(value => value.replace(/\.00/g, '₽'));
    nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
});