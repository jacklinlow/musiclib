var myApp = angular.module('myApp', ['ngResource', 'spring-data-rest', 'ngRoute']);

myApp.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

myApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/listsongs', {
        templateUrl: 'pages/listSongs.html',
        controller: 'listSongsController'
    })

});

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {



}])

myApp.controller('listSongsController', function ($scope, $http, SpringDataRestAdapter) {

    $scope.addSong = function () {
        $http.post('http://localhost:9000/song', { title: $scope.title, artist: $scope.artist, bpm: $scope.bpm, key: $scope.key })
            .success(function (result) {

                console.log(result);
                $scope.song = result;

            })
            .error(function (data, status) {

                console.log(data);

            });

            $scope.title = '';
            $scope.artist = '';
            $scope.bpm = '';
            $scope.key = '';
    };

    $scope.addTest = function () {
            $http.post('http://localhost:9000/song', { title: 'Test1', artist: 'Test2', bpm: '123', key: '3m' })
                .success(function (result) {

                    console.log(result);
                    $scope.song = result;
                    console.log('This ran fine!');

                })
                .error(function (data, status) {

                    console.log(data);
                    console.log('This failed!');

                });

    };


    var httpPromise = $http.get('http://localhost:9000/song');
    SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
        $scope.songs = processedResponse._embeddedItems;
    });

    $scope.setSelected = function() {
            $scope.selected = this.song;
            console.log($scope.selected);
    };

})

;