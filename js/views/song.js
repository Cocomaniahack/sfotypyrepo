//.............................cuarto carga la lista de canciones...................................


Sfotipy.Collections.Songs = Backbone.Collection.extend({
  model: Sfotipy.Models.Song
});//.....................coleccion
Sfotipy.Models.Song = Backbone.Model.extend({});//......................modelo



Sfotipy.Views.Song = Backbone.View.extend({
  tagName: 'li',
  className: 'item border-bottom',

  events: {
    'click .action.icon-plus': 'select',
    'click .action.icon-heart': 'love',
    'click .action.icon-share': 'share'

  },

  template: Handlebars.compile($("#song-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
  },

  render: function () {
    var cancion = this.model.toJSON()
    var html = this.template(cancion);
    this.$el.html(html);
    return this;
  },

  select: function () {
    Sfotipy.app.player.model.set(this.model.toJSON());
    return false;
  },

  love: function () {
   // Sfotipy.app.artist.model.set(this.model.toJSON());
    alert("orpimiste el love:  "+ this.model.get("name"));
    return false

  },

  share: function () {

    alert("apromiste al share :" + this.model.get("name"));
    return false;

  }
});