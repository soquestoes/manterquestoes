//Esta função retorna o primeiro nome da pessoa
//Serviço de Dados: MONGODB
$scope.nome = function(param){
	f = function(param){
		return processarNomeMONGODB(param)
	};
	return f
};
//Esta função retorna o sobrenome da pessoa
//Serviço de Dados: MONGODB
$scope.sobrenome = function(param){
	f = function(param){
		return processarSobrenomeMONGODB(param)
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