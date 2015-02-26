//Sfotipy = {}
var coleccion = Backbone.Collection.extend({});

//coleccion.on("add" , function(){console.log(se ha agregado uno nuevo dato)});

var modelo = Backbone.Model.extend({
initialize: function(){
console.log('nuevo Modelo');
}
});




var vista = Backbone.View.extend({
events: {
'click .item.border-botton': 'add'
},
tagName: 'div',
className: 'cuadro list',
template: Handlebars.compile($("#div-template").html()),

render: function(){
      //var modelo =  this.model;
      //var nombre = modelo.get('nombre');
      //var lastname = modelo.get('lastname');

      var data = this.template(this.model.toJSON());

      this.$el.html(data);
},

add: function(e) {
   alert(this.model.get("lastname"));
   },

initialize: function(){
    this.listenTo(this.model, "change", this.render, this);
    //cada cambie en el modelo vuelva a renderizar la vista
   }

});

//window.Sfotipy = Sfotipy;

