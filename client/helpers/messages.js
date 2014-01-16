// Local (client-only) collection
Messages = new Meteor.Collection(null);

setFlash = function(msg, type) {
	Messages.insert({msg: msg, type: type, seen: false});
};

clearMessage = function() {
	Messages.remove({seen: true});
};