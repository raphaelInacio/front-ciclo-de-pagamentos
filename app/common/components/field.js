(function () {
    angular.module('app').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
        },
        template: `
        <div class="{{$ctrl.grid}}">
            <div class="form-group">
                <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
                <input id="{{$ctrl.id}}" class="form-control" placeholder="{{$ctrl.placeholder}}"/>
            </div>
        </div>
        `
    })
})()