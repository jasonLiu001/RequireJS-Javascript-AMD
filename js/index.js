require.config({
    shim: {
        'unregualr-file': {
            deps: ['jquery'],
            exports: 'unregualrjs'
        }
    },
    baseUrl: 'libs',
    paths: {
        'jquery': 'jquery-3.1.1'
    }
});

require(['jquery', 'unregualrjs'], function ($, myregular) {
    $('#name').text('get my way');
});