(function () {
    'user strict';

    angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/index.html'
            })
            .when('/login', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/login.html'
            })
            .when('/restrita', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/restrita.html',
                authorize: true
            })
            .when('/produtos/listar/:id', {
                controller: 'ProductController',
                controllerAs: 'vm',
                templateUrl: 'app/views/product/product-list.html'
            })
            .otherwise({
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/404.html'
            });
    });
})();