/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('sampleApp-services').service('xhrService',['dataFactory',function(dataFactory){
    this.get=function(success,error,url){
        if(dataFactory[url])
            success(dataFactory[url]);
        else
            error();
    }
}]);