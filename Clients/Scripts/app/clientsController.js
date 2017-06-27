var clientsApp = angular
    .module("clientsModule", ['angularUtils.directives.dirPagination'])
    .controller("clientsController", function ($scope, $http) {

        $scope.pageSize = 3;

        $scope.options = [{ name: '3',  value: 3 },
                          { name: '5',  value: 5 },
                          { name: '10', value: 10 },
                          { name: '20', value: 20 }];

        function formatDate(date) {
            return (date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate()) + '.' +
                   (date.getMonth().toString().length == 1 ? '0' + date.getMonth() : date.getMonth()) + '.' +
                    date.getFullYear();
        }

        function getClients () {
            $http.get('/api/Clients')
                .then(function (response) {
                    $scope.clients = response.data;

                    for (var i = 0; i < $scope.clients.length; i++) {
                        $scope.clients[i].TextDate = formatDate(new Date($scope.clients[i].RegistrationDate));
                    }

                    $scope.clients2 = clients;
                }
                , function () {
                    $scope.error = "An error has occured while loading data!";
                });
        };

        getClients();

        $scope.delete = function (clientId) {
            var client = null;

            for (var i = 0; i < $scope.clients.length; i++) {
                if ($scope.clients[i].Id == clientId) {
                    client = $scope.clients[i];
                }
            }

            if (confirm('Do you really want to delete ' + client.Name + ' ?\n' +
                        'This client has been with you since ' + client.RegistrationDate)) {

                var i = $scope.clients.indexOf(client);
                $scope.clients.splice(i, 1);

                //$http.delete('/api/Clients/' + clientId)
                //    .then(function (data, status, headers, config) {
                //        getClients();
                //    }
                //    , function () {
                //        $scope.error = "An error has occured while sending data!";
                //    });
            }
        };

    });
