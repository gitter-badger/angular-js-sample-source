/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('sampleApp-factories').factory('dataFactory',function(){
    return {
        "https://www.abcd.com/message-get-url":{
            data:[
                {
                    title:"Regarding lectures",
                    content:"Your lecture was not good last week. you had not well prepared",
                    type:"danger"
                },
                {
                    title:"Module registration",
                    content:"Module registration for the new batch will be strating from next week.",
                    type:"info"
                },
                {
                    title:"Module registration2",
                    content:"Module registration for the new batch will be strating from next week.",
                    type:"success"
                },
                {
                    title:"Regarding lectures",
                    content:"Your lecture was not good last week. you had not well prepared",
                    type:"primary"
                },
                {
                    title:"Module registration",
                    content:"Module registration for the new batch will be strating from next week.",
                    type:"info"
                },
            ]
        }
    };
});
