# Meme Share Demo

Meteor app example.

## 1.0 Explain meteor packages
- Add bootstrap (meteor add twbs:bootstrap)
- Add stylus (meteor add stylus)
- Create client > templates > first templates

## 2.0 Start with Collections
- Create collections folder
- Declare posts collection
- More elaborated posts data
- Add (meteor add fortawesome:fontawesome)
- Update post item template
- Create posts fixture for DB
- Run meteor on a known db (MONGO_URL=mongodb://localhost:27017/memeapp meteor)
- See posts in console (Posts.find().fetch();)
- Update helpers for posts list
- Remove autopublish, insecure

## 3.0 Publications and Subscriptions
- Remove posts data from posts_list helper, update date on fixtures
- Create publications file and publish posts
- Touch main.js file and add temporary subscription
- Add ( meteor add momentjs:moment )
- Reset DB ( db.dropDatabase() )
- Create post item helpers to support date fromNow
- Add post directly on mongo to see reactivity

## 4.0 Routing and Users
- Add (meteor add iron:router)
- Add (meteor add accounts-password)
- Restructure main.html only with head and create layout.html
- Create our router.js file and define our layoutTemplate
- Do first route for home Router.route('',{})
- configure loadingTemplate and notFoundTemplate
- waitOn posts, remove subscription on main.js
- reset db, add comments count to fixture
- Do comments collection
- Add users and comments to fixture
- Do postPage route, update postItem template
- Do postPage template and helpers for date and comments
- Add hook Router.onBeforeAction('dataNotFound', {only: 'postPage'});
