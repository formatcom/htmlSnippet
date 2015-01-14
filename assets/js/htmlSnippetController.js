myApp.controller('htmlSnippetController', function ($scope, $sce){
	
	$scope.snippetData = [
		'<b>Uno</b>',
		'<b>Dos</b>',
		'<b>Tres</b>',
		'<b>Cuatro</b>'
	];

	$scope.Snippet = function (html){
		return $sce.trustAsHtml(html);
	}
});