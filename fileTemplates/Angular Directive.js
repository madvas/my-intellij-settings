(function() {
    'use strict';

    angular
        .module('${moduleName}')
        .directive('${NAME}', ${NAME});
    
    ${NAME}.${DS}inject = ['${DS}window'];

    /* @ngInject */
    function ${NAME} (${DS}window) {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();