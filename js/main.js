$(function(){

Sfotipy.app = new Sfotipy.Router();

});

//Sfotipy = {};

/*Sfotipy.Song = Backbone.Model.extend({});//clases cancion


Sfotipy.Songs = Backbone.Collection.extend({
model: Sfotipy.Songs


})




Sfotipy.SongView = Backbone.View.extend({
events: {
    'click .action.icon-plus': 'add',
     'click .action.icon-heart': 'heart'

     },
tagName: 'li',
className: 'item border-botton',

/*render: function (){
	var song = this.model;
	var name = song.get('name');
	var autor = song.get('autor');

	this.$el.html("<span>"+ autor +"</span> - <span>"+ name +"</span>");
}//render: se visualiara cuando se eecute esta vista en pantalla*/

/*template: Handlebars.compile($("#song-template").html()),

initialize: function(){
//this.listenTo(this.model, "change" , this.render, this);
this.listenTo(this.collection, "add", this.addOne, this);
this.listenTo(this.collection, "reset", this.render, this);
},

/*initialize: function () {
    this.listenTo(this.collection, "add", this.addOne, this);
    this.listenTo(this.collection, "reset", this.render, this);
  },

render: function (){
 this.$el.empty();
    this.addAll();
},



addOne: function (song) {
var songView = new Sfotipy.Views.Song({ model: song });
this.$el.append(songView.render().el);
  },


 addAll: function () {
  this.collection.forEach(this.addOne, this);
  }


add: function(e){
//alert(this.model.get("name"));
},
heart: function(e){
alert("es heart");
}

});//las vistas 





/*Sfotipy.Router = Backbone.Router.extend({
routes: {

"": "index",
"album/:name": "album",
"profile/:username": "profile"
},

index: function (){
	console.log("estas en el index");
},
album: function (name){

	console.log("Album:"+ name );
},
profile: function (username){
	console.log("Username:" + username);
}
});
Sfotipy.app = new Sfotipy.Router();
Backbone.history.start();
window.Sfotipy = Sfotipy;*/

