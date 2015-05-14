Template.postItem.helpers({
	dateForHumans: function(){
		return moment(this.date).fromNow();
	}
});