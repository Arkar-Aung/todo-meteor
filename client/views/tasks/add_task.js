Template.addTask.events({
	'submit form': function(e) {
		e.preventDefault();
		var ele = $(e.target).find('[name="name"]');
		var name = ele.val();
		if (name == '') { // Validate whether name is empty or not
			setFlash('Please enter task name','error');
			return false;
		}
		var task = {
			name: name,
			done: false
		};
 
		Meteor.call('add', task, function(error, id){ // Call function from collection
			if (error) {
				setFlash(error.reason,'error');
			} else {
				setFlash('New task is successfully added.','success');
			}
			
		});
		ele.val(''); // Empty textbox
		
	}
});