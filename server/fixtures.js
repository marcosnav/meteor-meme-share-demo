Accounts.onCreateUser(function (options, user) {

	// User extra data
	user.emails[0].verified = true;
	user.profile = options.profile ? options.profile : {};
	user.join = new Date();
	user.permissions = options.permissions ? options.permissions : [];
	user.notes = ['first visit'];

	return user;
});

// if theres no users
if (Meteor.users.find().count() === 0) {
	Accounts.createUser({
		email: 'marcosn.com@gmail.com', 
		password : 'qwerty123',
		profile: {
			name: 'Marcos Navarro'
		}
	});

	Accounts.createUser({
		email: 'contact@marcosn.com', 
		password : 'qwerty123',
		profile: {
			name: 'Beto Webster'
		}
	});

	console.log('Created dummy users!');
};

// If theres no posts
if (Posts.find().count() === 0) {

	var insertId = Posts.insert({
		publisher: 'Bobby Dobby',
		date: new Date(),
		title: 'Yo solo digo...',
		src: 'http://cdn.vuelodigital.com/wp-content/uploads/2014/07/meme-osea.jpg',
		comment: 'A comment here...',
		stars: 4,
		comments: 2
	});

	Posts.insert({
		publisher: 'Hugo Tarugo',
		date: new Date(),
		title: 'Gryffindor',
		src: 'http://cdn.smosh.com/sites/default/files/bloguploads/60s-spiderman-meme-gryffindor.jpg',
		comment: 'A comment here...',
		stars: 2,
		comments: 0
	});

	Posts.insert({
		publisher: 'Plastilina Mosh',
		date: new Date(),
		title: 'Deal with it',
		src: 'http://blog.100x100.net/wp-content/uploads/2013/10/obama-wins-reelection-memes.jpg',
		comment: 'A comment here...',
		stars: 0,
		comments: 0
	});

	var dummyUsers = [
		Meteor.users.findOne({'profile.name': 'Marcos Navarro'}),
		Meteor.users.findOne({'profile.name': 'Beto Webster'})
		];

	Comments.insert({
		forPost: insertId,
		authorId: dummyUsers[0]._id,
		authorName: dummyUsers[0].profile.name,
		date: new Date(),
		comment: "Quisque ut dolor gravida, placerat libero vel, euismod."
	});

	Comments.insert({
		forPost: insertId,
		authorId: dummyUsers[1]._id,
		authorName: dummyUsers[1].profile.name,
		date: new Date(),
		comment: "Magna pars studiorum, prodita quaerimus."
	});

	console.log('Created dummy posts!');
};

/* to insert directly on mongo

db.posts.insert({
	publisher: 'Brittney Babuca',
	date: new Date(),
	title: 'How was school?',
	src: 'http://slodive.com/wp-content/uploads/2014/03/animal-meme.jpg',
	comment: 'how was school...?',
	stars: 7
});

*/