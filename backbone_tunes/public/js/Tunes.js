(function($) {

	window.Album = Backbone.Model.extend({

		isFirstTrack: function(index){
			return index == 0
		}

	});

	window.AlbumView = Backbone.View.extend({
		tagName: 'li',
		className: 'album',
		initialize: function(){
			this.template = _.template($('#album-template').html());
		},
		render: function(){
			_.bindAll(this, 'render');
			this.model.bind('change', this.render);

			var renderContent = this.template(this.model.toJSON());
			$(this.el).html(renderContent);
			return this;
			}	
	});


})(jQuery);


// album = new Album({title: 'Mumford and Sons', artist: 'Mumford and Sons', tracks:[{title: "Little Mountian Man"},{title: 'I will wait'}]})
// albumview = new AlbumView({model:album})
// $('#container').append(albumview.render().el)
