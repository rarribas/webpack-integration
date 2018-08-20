var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
JST = JST.JST;

// - - - - - -  - - - - - 

var LaLiga = require('./components/la-liga.js');
var PremierLeague = require('./components/premier-league.js');

// - - - - - -  - - - - - 

var DefaultRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function(){
    $('.app').html(JST['footer']({name: 'Raul'}));
  }
});

$(document).ready(function() {
  var def_router = new DefaultRouter();
  var ll_router = new LaLiga.Router();
  var pl_router = new PremierLeague.Router();

  Backbone.history.start({ pushState: true, root: '/' });
});
