App.Collections.Twitters = Backbone.Collection.extend({
  initialize: function(){
    console.log('twitter collection created')
  },
  //Create search url endpoint from search term

  model: App.Models.Twitter,

})