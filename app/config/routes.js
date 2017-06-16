angular.module('app').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('dashBoard', {
            url : "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        }).state('billingCycle', {
            url : "/billing-cycle?page",
            templateUrl: "billingcycle/tabs.html"
        })

       $urlRouterProvider.otherwise('/dashboard')
    }
])