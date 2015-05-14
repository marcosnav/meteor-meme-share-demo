Meteor.publish('posts', function(){
	return Posts.find();
});

Meteor.publish('commentsForPost', function (postId){
	return Comments.find({forPost: postId});
});