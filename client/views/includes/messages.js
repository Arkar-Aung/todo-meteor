Template.messages.helpers({
	messages: function() {
		clearMessage();
		return Messages.find();
	}
});

Template.message.rendered = function() {
  var message = this.data;
  Meteor.defer(function() {
    Messages.update(message._id, {$set: {seen: true}});
  });
};