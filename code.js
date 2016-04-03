//Esta função retorna o primeiro nome da pessoa
$scope.nome = function(param){
	return param
};
//Esta função retorna o sobrenome da pessoa
$scope.sobrenome = function(param){
	return param
};

//Esta função retorna o nome completo da pessoa:
//         nome + sobrenome
$scope.nomeCompleto = function(param1, param2){
	return $scope.nome(param1) + ' ' + $scope.sobrenome(param2);
};

//Esta variável recebe o retorno da função nomeCompleto
var nomePessoa = $scope.nomeCompleto('João', 'Silveira');