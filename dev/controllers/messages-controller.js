/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('sampleApp-controllers').controller('sampleController', ['$scope', 'messageService', '$rootScope', function ($scope, messageService, $rootScope) {
        $scope.title = "Messages Controller";
        $scope.description = "This is the message controller. This is the message controller. This is the message controller. This is the message controller. This is the message controller. This is the message controller. This is the message controller. This is the message controller. This is the message controller. This is the message controller. This is the message controller. ";
        $scope.messages = [];

        $rootScope.$on('forceToToggleCloseButtonVisibility', function (event, show) {
            console.log('sampleController $rootScope : ' + show);
        });

        $scope.$on('forceToToggleCloseButtonVisibility', function (event, show) {
            console.log('sampleController $scope : ' + show);
        });
    }]);
