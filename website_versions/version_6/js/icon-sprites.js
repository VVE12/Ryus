ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [45.04047084, 38.99511866],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'СК РЮС',
            balloonContent: 'ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ, РЕМОНТ ЗДАНИЙ И СООРУЖЕНИЙ. СТРОИТЕЛЬСТВО МАЛОЭТАЖНЫХ И МНОГОЭТАЖНЫХ ДОМОВ. ПОЛНЫЙ СПЕКТР УСЛУГ ДЛЯ ЮРИДИЧЕСКИХ И ФИЗИЧЕСКИХ ЛИЦ.'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'markerimg.png',
            // Размеры метки.
            iconImageSize: [86, 67],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([45.04047084, 38.99511866], {
            hintContent: 'СК РЮС',
            balloonContent: 'ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ, РЕМОНТ ЗДАНИЙ И СООРУЖЕНИЙ. СТРОИТЕЛЬСТВО МАЛОЭТАЖНЫХ И МНОГОЭТАЖНЫХ ДОМОВ. ПОЛНЫЙ СПЕКТР УСЛУГ ДЛЯ ЮРИДИЧЕСКИХ И ФИЗИЧЕСКИХ ЛИЦ.'//,
//            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '',
            // Размеры метки.
            iconImageSize: [86, 67],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});