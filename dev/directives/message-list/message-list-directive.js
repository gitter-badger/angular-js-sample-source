/**
 * @ngdoc directive
 * @name sampleApp.sampleApp-directives:sampleDirectiveElement
 * @element sample-directive-element
 * @function
 *
 * @description
 * Resize textarea automatically to the size of its text content.
 *
 * @example
 <example module="sampleApp">
 <file name="index.html">
 <sample-list-directive-element></sample-list-directive-element>
 </file>
 </example>
 */
angular.module('sampleApp-directives').directive('sampleListDirectiveElement', ['messageService', function (messageService) {
        var link = function ($scope, element, attrs) {
            $scope.messagesList = [];
            $scope.messagesCount=0;
            $scope.showCloseButtons=true;
            
            messageService.getMessages(
                    function (data) {
                        $scope.messagesList = data;
                        $scope.messagesCount=$scope.messagesList.length;
                    },
                    function (err) {
                        $scope.error = err;
                    });
            
            $scope.toggleCloseButtonsVisibility=function(){
                console.log('toggleCloseButtonsVisibility : '+$scope.showCloseButtons);
                $scope.showCloseButtons=!$scope.showCloseButtons;
                $scope.$broadcast('forceToToggleCloseButtonVisibility',$scope.showCloseButtons);
            }

            $scope.$on('messageClosed', function (event,message) {
                var index = $scope.messagesList.indexOf(message);
                $scope.messagesList.splice(index, 1);
            });
        }
        return{
            restrict: 'E',
            scope: {
                count:"="
            },
            replace: true,
            link: link,
            templateUrl: 'src/dev/directives/message-list/message-list-tmp.html'
        }
    }]);