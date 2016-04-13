var myApp = angular.module('myApp', ['ngResource', 'spring-data-rest']);

myApp.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('http://localhost:9000/people/57093c6362b545f3835accaa')
        .success(function (result) {
            console.log(result);
            $scope.song = result;

        })
        .error(function (data, status) {

            console.log(data);

        });


//    $scope.addPerson = function () {
//        $http.post('http://localhost:8080/people', { firstName: $scope.firstName, lastName: $scope.lastName })
//            .success(function (result) {
//
//                console.log(result);
//                $scope.people = result;
//
//            })
//            .error(function (data, status) {
//
//                console.log(data);
//
//            });
//    };
//    
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
    
    
    
}])

myApp.controller('testController', function ($scope, $http, SpringDataRestAdapter) {

    var httpPromise = $http.get('http://localhost:9000/song');

    SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
        $scope.song = processedResponse._embeddedItems;
    });

})

;