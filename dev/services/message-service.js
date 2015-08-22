/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('sampleApp-services').service('messageService',['xhrService','urlFactory',function(xhrService,urlFactory){
    this.getMessages=function(success,error){
        xhrService.get(function(result){
            success(result.data);
        },function(){
            error('An Unknown error');
        },urlFactory.messagesGetUrl);
    };
}]);

