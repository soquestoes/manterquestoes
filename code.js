//Esta função retorna o primeiro nome da pessoa
//Serviço de Dados: *********
$scope.nome = function(param){
	f = function(param){
		return processarNome(param)
	};
	return f
};
//Esta função retorna o sobrenome da pessoa
//Serviço de Dados: *********
$scope.sobrenome = function(param){
	f = function(param){
		return processarSobrenome(param)
	};
	return f
};

//Esta função retorna o nome completo da pessoa:
//         nome + sobrenome
$scope.nomeCompleto = function(param1, param2){
	return $scope.nome(param1) + ' ' + $scope.sobrenome(param2);
};

//Esta variável recebe o retorno da função nomeCompleto
var nomePessoa = $scope.nomeCompleto('João', 'Silveira');