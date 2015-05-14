// If theres no posts
if (Posts.find().count() === 0) {
	Posts.insert({
		publisher: 'Bobby Dobby',
		date: '1 hour ago',
		title: 'Yo solo digo...',
		src: 'http://cdn.vuelodigital.com/wp-content/uploads/2014/07/meme-osea.jpg',
		comment: 'A comment here...',
		stars: 4
	});

	Posts.insert({
		publisher: 'Hugo Tarugo',
		date: '1 hour ago',
		title: 'Gryffindor',
		src: 'http://cdn.smosh.com/sites/default/files/bloguploads/60s-spiderman-meme-gryffindor.jpg',
		comment: 'A comment here...',
		stars: 2
	});

	Posts.insert({
		publisher: 'Plastilina Mosh',
		date: '1 hour ago',
		title: 'Deal with it',
		src: 'http://blog.100x100.net/wp-content/uploads/2013/10/obama-wins-reelection-memes.jpg',
		comment: 'A comment here...',
		stars: 0
	});

	console.log('Created dummy posts!');
};