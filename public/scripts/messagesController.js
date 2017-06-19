var myApp = angular.module('myApp', []);

myApp.controller('MessagesController', function(MessagesServices) {
  var vm = this;
  vm.all = [];

  vm.getMessages = function() {
    console.log('in controller getMessages');
    MessagesServices.retrieveMessages().then(function() {
      vm.data = MessagesServices.data;
      vm.all = vm.data;
      console.log('in controller:', vm.data);

    }); // end service function call
  }; // end getMessages

  vm.postMessages = function() {
    console.log('in postMessages');
    var newListing = {
      name: vm.nameIn,
      message: vm.messageIn,
    };
    MessagesService.postMessages(newMessage);
    vm.getMessages();
  }; // get listings
}); // end myApp
