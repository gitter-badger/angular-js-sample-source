describe('Module : Sample app',function(){
    describe('Controller : sampleController',function(){
        var controller,$scope;
        
        beforeEach(function(){
            //Import the module
            angular.mock.module('sampleApp');
            
            //Import the controller
            angular.mock.inject(function($controller,$rootScope){
                $scope=$rootScope.$new();
                controller=$controller('sampleController',{
                    $scope:$scope
                });
                
                $scope.$digest();
            });
        });
        it('should have a title',function(done){
            assert($scope.title);
            assert.equal($scope.title,"Messages Controller");
            done();
        });
        it('should have a description',function(done){
            assert($scope.description);
            assert.equal($scope.description,"This is the message controller. ");
            done();
        });
    });
});
