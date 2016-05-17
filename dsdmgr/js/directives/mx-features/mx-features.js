'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('app')
	.directive('mx-features',function(){
		return {
        templateUrl:'js/directives/mx-features/list.html',
        restrict: 'E',
        replace: true,
    	}
	});