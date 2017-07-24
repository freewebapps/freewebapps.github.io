angular.module('app', [])

    .controller('SiteController', function ($http, $scope) {
        $scope.sites = [];
        $scope.other = [];
        $scope.hasError = false;

        $http.get('json/sites.json')
            .then(function successCallback(response) {
                $scope.sites = response.data;
            }, function errorCallback(response) {
                $scope.hasError = true;
            });

        $http.get('json/other.json')
            .then(function successCallback(response) {
                $scope.other = response.data;
            }, function errorCallback(response) {
                $scope.hasError = true;
            });
    });
