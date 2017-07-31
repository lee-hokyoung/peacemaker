var PeaceMakerApp = angular.module('PeaceMakerApp', ['ngMaterial']);
var HomeController = function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.sideMenus = [
        {title:'어반힐이란?', link:'about'}
        ,{title:'프로그램안내', link:'program'}
        ,{title:'문화동아리', link:'culture'}
        ,{title:'활동사진', link:'pictures'}
    ];

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }
};
var HomeConfig = function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
};
PeaceMakerApp.controller("HomeController", HomeController)
    .config(HomeConfig);

var LoginController = function($scope, $timeout){

};
