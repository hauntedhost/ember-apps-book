App = Ember.Application.create({
  currentUser: localStorage['currentUser']
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Router.map(function() {
  this.route('about');
  this.route('sign-in');

  this.route('ask-question')
  this.resource('question', { path: '/:question_id' });
});
