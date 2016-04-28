App.Views.Instagram = Backbone.View.extend({

  initialize: function(){
    
    //compile the game template
    this.instagramTemplate = Handlebars.compile($('#instagram-template').html());

    this.render();
  },

  // events: {
  //   //When the save button is clicked
  //   // run the saveGame function
  //   'click #save-button': 'saveGame'
  // },

  render: function(){


    //take this.model and turn it into JSON
    //and put it into the compiled template
    console.log(this.model)
    var data = this.model.toJSON();

    console.log("single view render")
    var compiledTemplate = this.gameTemplate(data);
    this.$el.html(compiledTemplate); 
  },
})