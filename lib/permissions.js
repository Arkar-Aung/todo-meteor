// check that the userId specified owns the documents
ownTask = function (userId, task) {
	return task && task.userId === userId;
}