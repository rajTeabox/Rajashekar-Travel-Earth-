(function () {
    "use strict";
    angular.module("create-event",[])
        .config(['$stateProvider',function config($stateProvider) {
            $stateProvider.state("create-event", {
                url: '/create-event',
                templateUrl: 'CreateEvent/create_event.htm',
                controller: 'createCtrl'
            });
        }])
        .directive("inputTemplate",[function () {
            return{
                restrict : 'E',
                templateUrl : 'CreateEvent/inputTemplate.html'
            }
        }])
        .controller("createCtrl", ['$scope','listOfEvents','$location', function ($scope,listOfEvents,$location) {
            $scope.newEvent = {}
            function guid() {
              function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
              }
              return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            }
            $scope.newEvent.id = guid();
            $scope.AddToEvent = function () {
                 listOfEvents.create($scope.newEvent);
                 $location.path('/');

            };
            
        }])
})();