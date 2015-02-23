Sfotipy.Views.Artist = Backbone.View.extend({
 el: $(".authors"),

  template: Handlebars.compile($("#current-album-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render);

    
  },

  render: function () {
    var song = this.model.toJSON();
    this.$el.html(this.template(song));
  }
});