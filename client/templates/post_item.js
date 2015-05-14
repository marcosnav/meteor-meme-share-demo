Template.postItem.helpers({
	dateForHumans: function(){
		return moment(this.date).fromNow();
	}
});

Template.postItem.events({
	'click .post-stars': function(ev, template){
		Meteor.call('starrit', template.data._id, function (err, res){
			if (err) { console.log(err); };
		});
	}
});