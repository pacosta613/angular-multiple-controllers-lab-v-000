function ContactController() {
  var vm = this;
  vm.name = 'Pedro'
  vm.email = 'pedro.acosta@gmail.com';
  vm.phone = '9170000000';
 
  this.changeName = function () {
    vm.name = 'Tomas'
  };
}

angular
 .module('app')
 .controller('ContactController', ContactController);