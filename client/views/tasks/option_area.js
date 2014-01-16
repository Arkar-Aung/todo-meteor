Template.optionArea.events({
	"click #del-tasks": function(e) {
		if (confirm('Are you sure ?')) {
			var tasks = Tasks.find({done: true});
			tasks.forEach(function (task) {
				Tasks.remove(task._id);
			});
			setFlash('Task is successfully deleted.','success');
		}
	},
	"click #all-done": function(e) {
		if (confirm('Are you sure ?')) {
			var tasks = Tasks.find({done: false});
			var data = {done: true};
			tasks.forEach(function (task) {
				Tasks.update(task._id, {$set: data});
			});
			setFlash('All task is successfully set done.','success');
		}
	}	
});