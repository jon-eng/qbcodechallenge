App.Models.Instagram = Backbone.Model.extend({
  initialize: function(){
    console.log('instagram model created')
  },

   url:'/instagram',

})

var igModel = new App.Models.Instagram;
igModel.fetch();