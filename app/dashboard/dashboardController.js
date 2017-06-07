
(function () {
    angular.module('app').controller('DashboardController',
    ['$http', DashboardController])

    function DashboardController($http) {
        const vm = this
        vm.getSummary = function () {
            const url = 'http://localhost:3003/api/billingSumaryService'
            $http.get(url).then(function (res) {
                const {credit = 0, debit = 0} = res.data
                vm.credit = credit
                vm.debit = debit
                vm.total = credit - debit
            })
        }

        vm.getSummary()
    }
})()
