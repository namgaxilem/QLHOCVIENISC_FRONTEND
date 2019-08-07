rootApp.service('headerService', function() {
  this.loggedIn;

  this.setLoggedIn = function(login) {
      this.loggedIn = login;
  }

  this.getLoggedIn = function(){
      return this.loggedIn;
  };

});
