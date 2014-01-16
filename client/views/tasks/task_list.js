Template.taskList.helpers({
	tasks: function() {
		var id = Meteor.userId();
		return Tasks.find({userId: id});
	},
	total: function() {
		var id = Meteor.userId();
		return Tasks.find({userId: id}).count();
	},
	count: function() {
		var id = Meteor.userId();
		return Tasks.find({done: false, userId: id}).count();
	}
});