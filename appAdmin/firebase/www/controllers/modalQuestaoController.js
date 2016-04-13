'Use Strict';
angular.module('App').controller('modalQuestaoController', 
    function ($scope, $state, $localStorage, $location,$ionicPopup, 
                                $firebaseObject, questoesService,$ionicModal) {
  $scope.modalQuestao.changeButtonTitle=function(){
   //   console.info("mudou estado do botao");
      $scope.modalOpcoes.toggleOpcoes="Adicionar Opções"; 
      if($scope.modalQuestao.data.questao.tipoMultiplaEscolha){
          if($scope.modalQuestao.data.questao.opcoes){
                if($scope.modalQuestao.data.questao.opcoes.length>0)
                     $scope.modalOpcoes.toggleOpcoes="Editar Opções";
          }
               
          
       //   console.info("limpou o texto da questao");    
       $scope.modalQuestao.data.questao.respostaTexto=null;
      }
      else{
      //  console.info("limpou as opcoes");
        $scope.modalQuestao.data.questao.opcoes=null; 
      }
  };
  $scope.modalQuestao.openModalAddOptions = function() {
    $scope.modalAddOptions.show();
  };
  $scope.modalQuestao.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.modalQuestao.atualizarQuestao = function(questao){
      questoesService.update(angular.fromJson(angular.toJson(questao))) ;
      $scope.modalQuestao.data.questao={};
      $scope.modalQuestao.closeModal();
  }
  $scope.modalQuestao.adicionarQuestao = function () {
     // console.info("dentro do adicionar questao");
      if (!$scope.modalQuestao.data.questao.opcoes)
                      $scope.modalQuestao.data.questao.opcoes=[];
      var questao =$scope.modalQuestao.data.questao;
  //    console.info(angular.fromJson(angular.toJson(questao)));                
      questoesService.add(angular.fromJson(angular.toJson(questao))) ;
      $scope.modalQuestao.data.questao={};
      $scope.modalQuestao.closeModal();
     // console.info("dentro e saindo do adicionar");
  }; 
                                });