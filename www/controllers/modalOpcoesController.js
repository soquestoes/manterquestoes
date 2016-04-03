'Use Strict';
angular.module('App').controller('modalOpcoesController', 
    function ($scope, $state, $localStorage, $location,$ionicPopup, 
                                $firebaseObject, questoesService,$ionicModal) {

  
  $scope.modalOpcoes.fecharModal=function(){
     // console.info("entrei no close modal");
      $scope.modalOpcoes.changeButtonTitle();
     //  console.info("entrei no close modal 2");
      $scope.modalAddOptions.hide();
      //  console.info("entrei no close modal 3");
  };
    $scope.modalOpcoes.changeButtonTitle=function(){
    //  console.info("mudou estado do botao Adicionar");
      $scope.modalOpcoes.toggleOpcoes="Adicionar Opções"; 
      
      if($scope.modalQuestao.data.questao.tipoMultiplaEscolha){
          if($scope.modalQuestao.data.questao.opcoes){
                if($scope.modalQuestao.data.questao.opcoes.length>0){
                     $scope.modalOpcoes.toggleOpcoes="Editar Opções";
      //                  console.info("mudou estado do botao Editar");
                }
          }
      //    console.info("limpou o texto da questao");    
       $scope.modalQuestao.data.questao.respostaTexto=null;
      }
      else{
      //  console.info("limpou as opcoes");
        $scope.modalQuestao.data.questao.opcoes=null; 
      }
  };
  $scope.modalOpcoes.adicionarOpcao = function(){
     // console.info("entrei no adicionarOpcao");
      if (!$scope.modalQuestao.data.questao.opcoes)
                     $scope.modalQuestao.data.questao.opcoes=[];   
      var opcao = {texto:$scope.modal.multiplaTexto, verdadeira:$scope.modal.multiplaChecked};
      //angular.fromJson(angular.toJson(                               
      $scope.modalQuestao.data.questao.opcoes.push(angular.fromJson(angular.toJson(opcao)));
      
      $scope.modal.multiplaTexto=null;
      $scope.modal.multiplaChecked = null;
  };                                  
                                    
                            });