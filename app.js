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
          //  $scope.message = $scope.input

            if ($scope.message == "") {
                $scope.message = "Please enter data first"
            }
            else if (array.length < 3 && $scope.message !== null ) {
                $scope.message = "Enjoy";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();
