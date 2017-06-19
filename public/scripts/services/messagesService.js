myApp.service('MessagesServices', function($http) {
  var sv = this;

  sv.retrieveMessages = function() {
    console.log('in service retrieveMessages');
    return $http({
      method: 'GET',
      url: '/messages'
    }).then(function(response) {
      console.log('in service, back from server with:', response);
      sv.data = response.data;
    }); // end $http
  }; // end retrieveMessages

  sv.postMessages = function(newMessage) {
    console.log('in postListings', newMessage);
    return $http({
      method: 'POST',
      url: '/messages',
      data: newMessage
    });
  };
}); // end service
