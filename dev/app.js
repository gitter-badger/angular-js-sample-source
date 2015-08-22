/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Application
angular.module('sampleApp',['sampleApp-controllers','sampleApp-directives']);

//Controllers
angular.module('sampleApp-controllers',['sampleApp-services']);

//Directives
angular.module('sampleApp-directives', ['app','sampleApp-services']);

//Factories
angular.module('sampleApp-factories',[]);

//Services
angular.module('sampleApp-services',['sampleApp-factories']);

//HTML Template Cache
angular.module('app',[]);