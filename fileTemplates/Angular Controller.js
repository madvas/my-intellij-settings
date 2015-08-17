(function() {
    'use strict';

    angular
        .module('${moduleName}')
        .controller('${NAME}', ${NAME});
        
    ${NAME}.${DS}inject = ['${dependency}'];

    /* @ngInject */
    function ${NAME}(${dependency}) {
        /* jshint validthis: true */
        var vm = this;
        
        vm.activate = activate;
        vm.title = '${NAME}';

        activate();
        
        ////////////////
        
        function activate() { }
    }
})();