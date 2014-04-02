App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('question');
    // var questions = [
    //   { title: 'how do i pet cute cats?',
    //     author: 'sean' },
    //   { title: 'are humans insane?',
    //     author: 'sebastian' }
    // ];

    // return questions
  }
});
