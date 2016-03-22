'use strict';
angular.module('shareit', [])
	.directive('shareit', [function() {
		return {
			restrict: 'AE',
			replace: 'false',
			controller: 'shareitCtrl'
		}
	}])
	.controller('shareitCtrl', ['$scope', '$element', '$location', function($scope, $element, $location) {
		$scope.copy = function () {
			// This is what we want to ignore in the url
			var toIgnore = $element.attr('shareitignore').split(',');
			var finalUrl = $location.absUrl().indexOf('?') === -1 ? $location.absUrl() + '?shareit=true&' : $location.absUrl() + '&shareit=true&';
			angular.forEach($scope, function(val, key) {
				if (key && (typeof val !== "function") && (key.substr(0,1) != '$') && (toIgnore.indexOf(key) === -1) ) {
					if ($element.attr('sneaky')) {
						finalUrl += key+'='+window.btoa(val)+'&';
					} else {
						finalUrl += key+'='+val+'&';
					}
				}
			});
			finalUrl = finalUrl.substr(0, finalUrl.length - 1);
			alert('Copy this URL and share: \n' + finalUrl);
		}

		var setScope = function () {
			var urlParams = $location.absUrl().split('shareit=true&')[1];
			if (urlParams) {
				urlParams = urlParams.split('&');
			}
			if (urlParams) {
				for (var i=0; i<urlParams.length; i++) {
					var keyPair = urlParams[i].split('=');
					if ($element.attr('sneaky')) {
						$scope[keyPair[0]] = window.atob(keyPair[1]);
					} else {
						$scope[keyPair[0]] = keyPair[1];
					}
				}
			}
		}
		setScope();
	}])
;