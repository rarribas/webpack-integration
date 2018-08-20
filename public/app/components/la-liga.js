var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// - - - - - -  - - - - - 

exports.Router = Backbone.Router.extend({
  routes: {
    'la-liga': 'la_liga',
    'la-liga/real-madrid': 'real_madrid',
    'la-liga/barcelona': 'barcelona'
  },

  index: function(){
    $('.app').html('Dashboard');
  },

  la_liga: function(){
    $('.app').html('La Liga');
  },

  real_madrid: function(){
    $('.app').html('La Liga > Real Madrid');
  },

  barcelona: function(){
    $('.app').html('La Liga > Barcelona');
  }
});
