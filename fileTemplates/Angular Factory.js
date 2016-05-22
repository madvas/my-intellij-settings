(function() {
    'use strict';

    angular
        .module('${moduleName}')
        .factory('${NAME}', ${NAME});

    ${NAME}.${DS}inject = ['${dependency}'];

    /* @ngInject */
    function ${NAME}(${dependency}) {
        var service = {
            ${func}: ${func}
        };

        return service;
        
        ////////////////

        function ${func}() { 
        }
    }
})();