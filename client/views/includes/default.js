Template.default.events({
	'click #get-start': function(e) {
		$('.dropdown-toggle').trigger('click');
		return false;
	}
});
