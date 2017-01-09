(function() {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.input = "";
        $scope.message = "";
        $scope.stack = function() {

            var array = $scope.input.split(',');

            if (array.length < 3) {
                $scope.message = "Enjoy";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();
