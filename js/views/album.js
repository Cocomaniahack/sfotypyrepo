Sfotipy.Views.Album = Backbone.View.extend({

  tagName: 'article',
  className: 'song',

  events: {
    'click': 'navigate'
  },

  template: Handlebars.compile($("#album-template").html()),


  

  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
  },

  render: function () {
    var album = this.model.toJSON()
    var html = this.template(album);
    this.$el.html(html);
    return this;
  },

  navigate: function () {
    Sfotipy.app.navigate("album/" + this.model.get("name"), { trigger: true }),
    //Sfotipy.app.artist.model.set(this.model.toJSON());
    Sfotipy.app.artist.model.set(this.model.toJSON());//envia datos a player.js
  //alert("le has dado click al album"+ this.model.get("name"));


  }

});