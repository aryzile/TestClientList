var clientsApp = angular
    .module("clientsModule", ['angularUtils.directives.dirPagination'])
    .controller("clientsController", function ($scope, $http) {
        $scope.init = function () {
            //$http.get('/Home/Clients')
            $http.get('/api/Clients')
                .then(function (response) {
                    $scope.clients = response.data;
                }
                , function () {
                    $scope.error = "An error has occured while loading data!";
                });
        };
    });
