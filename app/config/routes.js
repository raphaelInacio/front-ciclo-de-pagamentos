angular.module('app').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('dashBoard', {
            url : "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        }).state('billingCycle', {
            url : "/billing-cycle",
            templateUrl: "billingcycle/tabs.html"
        })

       $urlRouterProvider.otherwise('/dashboard')
    }
])