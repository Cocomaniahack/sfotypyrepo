Sfotipy.Views.Album = Backbone.View.extend({
  el: '#song-template',

  //tagName: 'li',
 // className: 'cambiar',

 



initialize: function(){
   song-template.fetch();

},

  render: function() {
     this.$el.html("<p>render en accion </p>");
  },




  /*
events: {
    'click': 'navigate'
     },
    navigate: function(){
                alert("estas oprimiendo el boton");
            }*/

});
var appView = new Sfotipy.Views.Album();

