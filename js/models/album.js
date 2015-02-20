Sfotipy.Models.Album = Backbone.Model.extend({
	
 validate: function(attrs) {
    if (!attrs.name) {
      return "can't end before it starts";
    }
  },



	initialize: function(){
console.log("se ha iniciado una nueva instancia")


this.on('change', function(){

	console.log("el modelo ha cambiado");
})

}





});