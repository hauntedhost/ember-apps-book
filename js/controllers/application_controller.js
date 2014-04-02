App.ApplicationController = Ember.Controller.extend({
  signedInUser: function() {
    return this.store.find('user', localStorage['currentUser']);
  }.property('App.currentUser'),

  isUserSignedIn: function() {
    return localStorage['currentUser'] != null;
  }.property('App.currentUser'),

  actions: {
    signOut: function() {
      delete localStorage['currentUser'];
      App.set('currentUser', undefined);
    }
  }
});
