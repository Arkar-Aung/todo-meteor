Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { Meteor.subscribe('tasks', Meteor.userId()); }
});

Router.map(function() {
    this.route('default', {path: '/'});
    this.route('dashboard', {
        path: '/dashboard',
        template: 'taskList'
    });
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn())
            this.render('this.loadingTemplate');
        else
            this.redirect('/');
    }
};

var checkLogin = function() {
    if (Meteor.user()) {
        this.render('this.loadingTemplate');
        this.redirect('/dashboard');
    } 
};

Router.before(checkLogin, {only: 'default'});

Router.before(requireLogin, {only: 'dashboard'});