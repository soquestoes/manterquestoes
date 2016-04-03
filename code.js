$scope.nome = function(param){
	console.log('Mensagem');
	return param
};
$scope.sobrenome = function(param){
	return param
};

$scope.nomeCompleto = function(param1, param2){
	return $scope.nome('João') + ' ' + $scope.sobrenome('Silveira');
}