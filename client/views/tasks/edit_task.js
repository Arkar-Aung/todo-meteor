Template.editTask.events({
	'click .cancel': function(e) {
		e.preventDefault();
		var ele = $(e.target).parent().parent();
		var html = Session.get('html');
		Session.set('html', '');
		ele.html(html);
	},
	'submit form#edit-task': function(e) {
		e.preventDefault();
		var task = {
			name: $(e.target).find('[name="name"]').val()
		};
		var taskId = $(e.target).find('[name="_id"]').val();
		console.log(taskId);
		Tasks.update(taskId, {$set: task}, function(err, task) {
			if (err)
				setFlash(err,'error');
			if (task)
				setFlash('Task is successfully Updated.','success');
		});
	}
});

Template.editTask.helpers({
	task: function() {
		var tasks = Tasks.find({_id : Session.get('_id')});
		var task = tasks.fetch();
		return task[0];
	}
});