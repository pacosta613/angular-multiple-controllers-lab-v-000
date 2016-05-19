function StaffController() {
  var vm = this;
  vm.name = 'angelica';
  vm.email = 'angelica.acosta@gmail.com';
  vm.phone = '0000000000';
 
  this.changeName = function () {
    vm.name = 'ang'
  };
}

angular
 .module('app')
 .controller('StaffController', StaffController);