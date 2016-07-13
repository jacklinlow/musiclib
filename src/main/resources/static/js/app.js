var myApp = angular.module('myApp', ['ngResource', 'spring-data-rest', 'ngRoute']);
var prodUrl = "https://jacklinmusic.herokuapp.com/song";
var devUrl = "http://localhost:8080/song";
var currentUrl = prodUrl;

myApp.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


myApp.config(function ($routeProvider) {
    $routeProvider

    .when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })

    .when('/listsongs', {
        templateUrl: 'pages/listSongs.html',
        controller: 'listSongsController'
    })

    .when('/mix', {
            templateUrl: 'pages/mix.html',
            controller: 'mixController'
    })

});

myApp.controller('mainController', function ($scope, $filter, $http) {


})

myApp.controller('listSongsController', function ($scope, $http, SpringDataRestAdapter) {

    $scope.addSong = function () {
        $http.post(currentUrl, { title: $scope.title, artist: $scope.artist, bpm: $scope.bpm, key: $scope.key })
            .success(function (result) {

                console.log(result);
                $scope.song = result;
                $scope.loadSongs();

            })
            .error(function (data, status) {

                console.log(data);

            });

            $scope.title = '';
            $scope.artist = '';
            $scope.bpm = '';
            $scope.key = '';
    };

//    $scope.addTest = function () {
//            $http.post('http://localhost:8080/song', { title: 'Test1', artist: 'Test2', bpm: '123', key: '3m' })
//                .success(function (result) {
//
//                    console.log(result);
//                    $scope.song = result;
//                    $scope.loadSongs();
//                    console.log('This ran fine!');
//
//                })
//                .error(function (data, status) {
//
//                    console.log(data);
//                    console.log('This failed!');
//
//                });
//
//    };

    $scope.loadSongs = function(){
        var httpPromise = $http.get(currentUrl);
        SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
            $scope.songs = processedResponse._embeddedItems;
        });
    }

    $scope.loadSongs();

    $scope.setSelected = function() {
            $scope.selected = this.song;
            console.log($scope.selected);
    };

})

myApp.controller('mixController', function ($scope, $http, SpringDataRestAdapter) {

    $scope.loadSongs = function(){
        var httpPromise = $http.get(currentUrl);
        SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
            $scope.songs = processedResponse._embeddedItems;
        });
    }

    $scope.loadSongs();

    $scope.selected = '';

    var playedSongs = [];

    $scope.setSelected = function() {
            $scope.selected = this.song;
            var httpPromise = $http.get(currentUrl + '/search/findCompatibleSongsByKey', {
                                            params: { key: $scope.selected.key } });
            SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
            $scope.songs = processedResponse._embeddedItems;
            });
            playedSongs.push({artist: this.song.artist, title: this.song.title});
            console.log(playedSongs);
    };

})

;