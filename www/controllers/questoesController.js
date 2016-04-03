'Use Strict';
angular.module('App').controller('questoesController', 
    function ($scope, $state, $localStorage, $location,$ionicPopup, 
                                $firebaseObject, questoesService,$ionicModal) {
  // LISTA DE OPCOES QUE DEVEM SER ADICONADAS NA QUESTAO SE FOR DO TIPO OPCOES MULTIPLAS OU UNICA

  

  $scope.frmHome={};
  // MODAL DA QUESTAO
  $scope.modalQuestao={};
  $scope.modalQuestao.acao="Adicionar Questão";
  $scope.modalQuestao.data={};
  $scope.modalQuestao.data.questao={};
  $scope.modalQuestao.data.questao.opcoes=null;
  //MODAL DA LISTA DE OPCOES
  $scope.modalOpcoes={};
  $scope.modalOpcoes.toggleOpcoes="Adicionar Opções";
  $scope.modalOpcoes.data={};
  $scope.questoes=questoesService.list(); 
 
// *********************************************************
/*  MODAL       PREPARA PARA EXISTIR OS MODAIS  DE QUESTAO E OPCOES      */
  $ionicModal.fromTemplateUrl('/controllers/subviews/modalQuestao.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
  $scope.modal = modal;
  $scope.modal.multiplaTexto=null;
  $scope.modal.multiplaChecked=null;
  });
  
    $ionicModal.fromTemplateUrl('/controllers/subviews/modalOpcoes.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalAddOptions = modal;
  });
  /*  MODAL               */
  
   // *********************************************************
   // HOME
 $scope.frmHome.editarQuestao=function(questao){
   //  $scope.modalQuestao.data.questao = questao;
   
     $scope.frmHome.openModalQuestao(questao); 
 };
  $scope.frmHome.removerQuestao = function (questao) {
       var modalConfirm = $ionicPopup.confirm({
        title: "ATENÇÃO!",
        template: "Tem certeza que quer remover este item?",
        okText: "REMOVER",
        okType: "button-assertive",
        cancelText:"Cancelar"
        });
// PROMISE
        modalConfirm.then(function(res) {
                if(res){
                    questoesService.remove(questao);
                }else{
                    console.log('poderia colocar codigo no cancel');
                }
            
            });
    //  console.info("dentro de remover questao");

 };
 $scope.frmHome.openModalNovaQuestao = function() { 
     var questao={tipoMultiplaEscolha:false};
      $scope.frmHome.openModalQuestao(questao);
 };
 $scope.frmHome.openModalQuestao = function(questao) {   
  //     console.info(questao);
    $scope.modalQuestao.data.questao=questao;
    $scope.frmHome.changeButtonTitle();
    $scope.modal.show();
  };

  $scope.frmHome.changeButtonTitle=function(){
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

   // *********************************************************
  // EVENTOS DOS MODAIS  -- SO PAPRA EXEMPLO
  // NAO FORAM COLOCADOS OS EVENTOS DO MODAL DE OPCOES
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
  //  console.info("modal is hidden");
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    console.info("modal is removed");
  });   
//  MODAL
});
