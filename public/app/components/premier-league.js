var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// - - - - - -  - - - - - 

exports.Router = Backbone.Router.extend({
  routes: {
    'premier-league': 'premier_league',
    'premier-league/liverpool': 'liverpool',
    'premier-league/man-united': 'man_united'
  },

  premier_league: function(){
    $('.app').html('Premier League');
  },

  liverpool: function(){
    $('.app').html('Premier League > Liverpool');
  },

  man_united: function(){
    $('.app').html('Premier League > Man United');
  }
});
