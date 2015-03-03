//......................................................PRIMERO.......................................................

Sfotipy.Collections.Albums = Backbone.Collection.extend({
  model: Sfotipy.Models.Album 
  //model: Sfotipy.Models.Album
});//..................coleccion....................


Sfotipy.Models.Album = Backbone.Model.extend({});//..........modelo...........








Sfotipy.Views.Albums = Backbone.View.extend({
  el: $('#albums'),

  template: Handlebars.compile($("#album-template").html()),
  //template: Handlebars.compile($("#current-album-template").html()),

  initialize: function () {
    this.listenTo(this.collection, "add", this.addOne, this);
  },

  render: function () {
    this.collection.forEach(this.addOne, this);

  },

  addOne: function (album) {

    var albumView = new Sfotipy.Views.Album({ model: album });
    this.$el.append(albumView.render().el);

  }

});





