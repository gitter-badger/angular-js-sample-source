angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/dev/directives/message-list/message-list-tmp.html',
    "<div class=\"col-lg-12 message-list\">\r" +
    "\n" +
    "    <p>There are <span class=\"label label-default\">{{messagesList.length}}</span> messages</p>\r" +
    "\n" +
    "    <a ng-click=\"toggleCloseButtonsVisibility()\">Hide close button</a>\r" +
    "\n" +
    "    <hr class=\"col-lg-12\">\r" +
    "\n" +
    "    <div class=\"col-lg-12\">\r" +
    "\n" +
    "        <sample-directive-element  \r" +
    "\n" +
    "            ng-repeat=\"msg in messagesList\" \r" +
    "\n" +
    "            class='col-lg-6 col-md-6 col-sm-12 col-xs-12'  \r" +
    "\n" +
    "            message=\"msg\" \r" +
    "\n" +
    "            >\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </sample-directive-element>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/dev/directives/message/message-tmp.html',
    "<div class=\"alert alert-dismissable alert-{{message.type}}\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" ng-click=\"close(message)\">×</button>\r" +
    "\n" +
    "    <strong>{{message.title}}</strong>\r" +
    "\n" +
    "    <br> \r" +
    "\n" +
    "    <i>{{message.content}}</i>\r" +
    "\n" +
    "</div>"
  );

}]);
