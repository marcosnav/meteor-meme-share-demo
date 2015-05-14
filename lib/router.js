Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function(){ return Meteor.subscribe('posts'); }
});

Router.route('/', {
	name: 'postsList'
});

Router.route('/meme/:_id', {
	name: 'postPage',
	waitOn: function(){
		return Meteor.subscribe('commentsForPost', this.params._id);
	},
	data: function(){
		return Posts.findOne(this.params._id);
	}
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});