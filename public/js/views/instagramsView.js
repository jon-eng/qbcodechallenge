App.Views.Instagrams = Backbone.View.extend({
  el: '#ig1',

  initialize: function(){
    console.log("instagrams view")
    //listen to a sync change on the page
    this.listenTo(this.collection, "sync", this.renderAll);
  },
  renderAll: function() {

    //empty el and render each model
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(instagram) {

    console.log("hello")

    //render moel with the game json
    var instagramView = new App.Views.Instagram({model: instagram});
    this.$el.append(instagramView.el);
  }


})