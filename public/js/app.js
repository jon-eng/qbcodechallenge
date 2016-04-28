var App = {
  Models: {},
  Collections: {},
  Views: {}
};

$(function() {
  console.log('Loaded, bro.');

  // App.loginView = new App.Views.LoginView();

  App.instagram = new App.Models.Instagram;
  App.instagrams = new App.Collections.Instagrams;
  App.instagramView = new App.Views.Instagram({collection: App.instagrams});


  // App.myGame = new App.Models.MyGame;
  // App.myGames = new App.Collections.MyGames;
  // App.myGamesView = new App.Views.MyGames({collection: App.myGames});

  // App.signupView = new App.Views.SignupView();
  
  // App.navView = new App.Views.NavView();
    
  // App.youtube = new App.Views.YoutubeView;


});




