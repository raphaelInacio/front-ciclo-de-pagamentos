(function () {
    angular.module('app').controller('DashboardController', ['$http', DashboardController])

    function DashboardController($http) {
        const vm = this
        vm.getSummary = function () {
            const url = 'http://localhost:3003/api/billingSumaryService'
            $http.get(url).then(function (res) {
                const {
                    credit = 0, debt = 0
                } = res.data
                vm.credit = credit
                vm.debt = debt
                vm.total = (credit - debt)
            })
        }

        vm.getSummary()
    }
})()