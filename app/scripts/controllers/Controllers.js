angular.module('lightApp.controllers', [])
    .controller('ListController', function($scope, $state, $window, API) {
        $scope.records = API.query();

        //view single
        $scope.viewSingle = function(id) {
            $state.go('single', { 'id': id });
        };

        //delete
        $scope.delete = function(record, $index) {
            record.$delete({ 'id': record.id }, function() {
                $scope.records.splice($index, 1);
            })
        };
    })
    .controller('SingleController', function($scope, $stateParams, API) {
        $scope.single = API.get({ id: $stateParams.id });

        //$scope.single = angular.toJson($scope.single);
    })
    .controller('NewController', function($scope, $state, $stateParams) {
        $scope.record = new API();

        $scope.create = function() {
            $scope.record.$save(function() {
                $state.go('list');
            })
        }
    })
    .controller('EditController', function($scope, $state, $stateParams) {

    });