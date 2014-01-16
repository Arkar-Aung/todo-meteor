Meteor.publish('tasks', function(userId) {
	return Tasks.find({userId: userId});
});