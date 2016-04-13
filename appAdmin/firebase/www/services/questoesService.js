angular.module('App').factory('questoesService', 
        function(FURL, $firebaseArray, $firebaseObject, utilityService,$rootScope) {

	var ref = new Firebase(FURL);
	//var questoesRef = $firebaseArray(ref.child('questoes'));
var questoesRef = ref.child('questoes');
var  arrayQuestoes = $firebaseArray(questoesRef);
	var service = {

    add: function(questao) {
       
      var pushRef = questoesRef.push();
      var id = pushRef.key();
      questao.id=id;
      questoesRef.push(questao);
     
      
    },
    update:function(questao){
         arrayQuestoes.$save(questao);
    },
    remove:function(questao){
        arrayQuestoes.$remove(questao);
    },
     list:function(){
       
        return arrayQuestoes;
     }
	};





	return service;

});
