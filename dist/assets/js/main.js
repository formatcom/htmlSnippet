var myApp = angular.module('htmlSnippet', []);
myApp.controller('htmlSnippetController', function ($scope, $sce){
	$scope.Snippet = function (){
		var html = '<ul><li>hola</li></ul>';
		return $sce.trustAsHtml(html);
	}
});