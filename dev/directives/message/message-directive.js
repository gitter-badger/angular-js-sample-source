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
         <sample-directive-element message="'Mesaage content'" title="'Message Title'" type="'success'"></sample-directive-element>
     </file>
   </example>
 */
angular.module('sampleApp-directives').directive('sampleDirectiveElement',['$rootScope', function ($rootScope) {
    var link=function(scope,element){
        scope.close=function(msg){
            $rootScope.$broadcast('messageClosed',msg);
        }
        scope.$on('forceToToggleCloseButtonVisibility',function(event,show){
            if(show)
                element.find('.close').show();
            else
                element.find('.close').hide();
        });
    };
    
    return{
        restrict: 'E',
        replace: true,
        link:link,
        scope: {
            message: "="
        },
        templateUrl:'src/dev/directives/message/message-tmp.html'
    }
}]);