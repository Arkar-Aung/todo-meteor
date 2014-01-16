Template.task.helpers({
	checked: function() {
		return (this.done) ? 'checked=checked' : '';
	},
	finished: function() {
		return (this.done) ? 'done' : '';
	},	
});

Template.task.events({
	'click .delete': function(e) {
		e.preventDefault();
		var taskId = $(e.target).parent().prev().attr('id');
		Tasks.remove({_id: taskId});
	},
	'click .edit': function(e) {
		e.preventDefault();
		var ele = $(e.target).parent().prev().prev().parent().parent();
		var taskId = $(e.target).parent().prev().prev().attr('id');
		Session.set('_id', taskId);
		var fragment = function() {
    		return Template['editTask']();
    	}
    	Session.set('html', ele.html());
		ele.html(Meteor.render(fragment));
	},	
	'change input[name="checker"]': function(e) {
		var ele = $(e.target);
		var taskId = ele.attr('id');
		(ele.prop('checked')) ? data = {done: true} : data = {done: false};

		Tasks.update(taskId, {$set: data});
		setFlash('Task is successfully Updated.','success');
	}
});