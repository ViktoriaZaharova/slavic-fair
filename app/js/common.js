// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [50.611096, 36.572535],
            zoom: 13
        }),


        // Создаем метки с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([50.638701, 36.571490], {
            iconContent: '<div class="marker marker1"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark2 = new ymaps.Placemark([50.560454, 36.569616], {
            iconContent: '<div class="marker marker2"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark3 = new ymaps.Placemark([50.599822, 36.561881], {
            iconContent: '<div class="marker marker3"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark4 = new ymaps.Placemark([50.565327, 36.559070], {
            iconContent: '<div class="marker marker4"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark5 = new ymaps.Placemark([50.574680, 36.594440], {
            iconContent: '<div class="marker marker5"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark6 = new ymaps.Placemark([50.555661, 36.573601], {
            iconContent: '<div class="marker marker6"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark7 = new ymaps.Placemark([50.560454, 36.569616], {
            iconContent: '<div class="marker marker7"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark8 = new ymaps.Placemark([50.565850, 36.560875], {
            iconContent: '<div class="marker marker8"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark9 = new ymaps.Placemark([50.559921, 36.570316], {
            iconContent: '<div class="marker marker9"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark10 = new ymaps.Placemark([50.560656, 36.568817], {
            iconContent: '<div class="marker marker10"></div>',
            balloonContent: '',
            hintContent: ''
        }),

        myPlacemark11 = new ymaps.Placemark([50.552250, 36.568909], {
            iconContent: '<div class="marker marker11"></div>',
            balloonContent: '',
            hintContent: ''
        });

    myMap.controls.add('smallZoomControl');
    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8)
        .add(myPlacemark9)
        .add(myPlacemark10)
        .add(myPlacemark11);
}

