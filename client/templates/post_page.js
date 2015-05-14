Template.postPage.helpers({
	dateForHumans: function(){
		return moment(this.date).fromNow();
	},
	postComments: function(){
		return Comments.find({}, {sort: {date: -1}});
	}
});