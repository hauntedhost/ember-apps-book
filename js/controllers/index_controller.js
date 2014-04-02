App.IndexController = Ember.ArrayController.extend({
  siteTitle: 'Welcome to Emberoverflow',
  imageCuteCat: '../images/cute-cat.jpg',
  currentTime: function() {
    return(new Date);
  }.property()
});
