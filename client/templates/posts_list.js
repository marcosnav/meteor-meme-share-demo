var postsData = [
	{
		title: 'Yo solo digo...',
		src: 'http://cdn.vuelodigital.com/wp-content/uploads/2014/07/meme-osea.jpg'
	}, 
	{
		title: 'Gryffindor',
		src: 'http://cdn.smosh.com/sites/default/files/bloguploads/60s-spiderman-meme-gryffindor.jpg'
	}, 
	{
		title: 'Deal with it',
		src: 'http://blog.100x100.net/wp-content/uploads/2013/10/obama-wins-reelection-memes.jpg'
	}
];

Template.postsList.helpers({
	posts: postsData
});