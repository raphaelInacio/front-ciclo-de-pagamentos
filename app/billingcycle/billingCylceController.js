(function () {
    angular.module('app').controller('BillingCycleController', [
        '$http',
        'MessageFactory',
        'TabsFactory',
        BillingCycleController
    ])

    function BillingCycleController($http, MessageFactory, TabsFactory) {

        const vm = this

        vm.url = 'http://localhost:3003/api/billingCycles'
        vm.msgs = MessageFactory
        vm.tabs = TabsFactory

        vm.refresh = function () {
            $http.get(vm.url).then(function (res) {
                vm.billingCycle = {}
                vm.billingCycles = res.data
                vm.tabs.show(vm, {
                    tabList: true,
                    tabCreate: true
                })
            })
        }

        vm.create = function () {
            $http.post(vm.url, vm.billingCycle).then(function (res) {
                vm.refresh()
                vm.msgs.addSuccess('Operação realizada com sucesso!')
            }, function (reason) {
                vm.msgs.addErrors(reason.data)
            })
        }

        vm.showTabUpdate = function (billingCycle) {
            vm.billingCycle = billingCycle
            vm.tabs.show(vm, {
                tabUpdate: true
            })
        }

        vm.showTabDelete = function (billingCycle) {
            vm.billingCycle = billingCycle
            vm.tabs.show(vm, {
                tabDelete: true
            })
        }

        vm.update = function () {
            const urlUpdate = `${vm.url}/${vm.billingCycle._id}`
            $http.put(urlUpdate, vm.billingCycle).then(function (res) {
                vm.refresh()
                vm.msgs.addSuccess('Operação realizada com sucesso!')
            }, function (reason) {
                vm.msgs.addErrors(reason.data)
            })

        }

        vm.delete = function () {
            const deleteUrl = `${vm.url}/${vm.billingCycle._id}`
            $http.delete(deleteUrl, vm.billingCycle)
                .then(function (res) {
                    vm.refresh()
                    vm.msgs.addSuccess('Operação realizada com sucesso!')
                }, function (reason) {
                    vm.msgs.addErrors(reason.data)
                })
        }

        vm.refresh()
    }
})()