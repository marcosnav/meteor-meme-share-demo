Meteor.methods({
	'starrit': function(_id){
		var result = '';

		Posts.update(_id, {'$inc': {stars: 1}}, function (err, doc){
			if (err) {console.log(err); return; };
			result = doc;
		});

		return result;
	}
});