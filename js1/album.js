Sfotipy.Views.Album = Backbone.View.extend({
  el: '.list',

  //tagName: 'li',
  //className: 'item border-botton',

 



/*initialize: function(){

this.render();

},

  render: function() {
     this.$el.html("<p>render en accion </p>");
  }
*/

events: {
    'click': 'navigate'
     },
    navigate: function(){
                alert('ededede ');
            }

});

