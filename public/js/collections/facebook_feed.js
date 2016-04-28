App.Collections.Facebooks = Backbone.Collection.extend({
  initialize: function(){
    console.log('facebook collection created')
  },
  //Create search url endpoint from search term

  model: App.Models.Facebook,

})