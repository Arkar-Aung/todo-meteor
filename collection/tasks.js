Tasks = new Meteor.Collection('tasks');

Tasks.allow({
	update: ownTask,
	remove: ownTask
});


Meteor.methods({
	'add': function(newTask) {
		var user = Meteor.user();
		// ensure the user is logged in
		if (!user)
			throw new Meteor.Error(401, "You need to login to do this action.");

		sameTask = Tasks.findOne({name: newTask.name});

		// check there are no previous posts with the same link
		if (newTask.name && sameTask) 
			throw new Meteor.Error(409, "Task already exist.");		

		var id = Meteor.userId();
		var task = {
			name: newTask.name,
			done: newTask.done,
			userId: id
		};
		var postId = Tasks.insert(task);
		return postId;
	}
});