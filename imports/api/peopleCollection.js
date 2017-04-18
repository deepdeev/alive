import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const PeopleCollection = new Mongo.Collection('people');


if (Meteor.isClient) {
  Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
  });
  Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.registerUsername.value;
        var passwordVar = event.target.registerPassword.value;
        var userType = event.target.registerUsertype.value;
        Accounts.createUser({
            username: usernameVar,
            password: passwordVar,
            type: userType
        });
    }
  },
  {
    'click #loginBB': function(event){
        event.preventDefault();
        console.log("holle");
        var usernameVar = event.target.registerUsername.value;
        var passwordVar = event.target.registerPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar);

    }
  }
);
  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.loginUsername.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar);
    }
  });
}
