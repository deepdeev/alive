import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

//Puede que mongo no sea la BD correcta para esta aplicacion, si las personas van a confiar en esta aplicacion puede ser necesario una BD SQL.

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
        let usernameVar = event.target.registerUsername.value;
        let passwordVar = event.target.registerPassword.value;
        let userType = event.target.registerUsertype.value;
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
        let usernameVar = event.target.registerUsername.value;
        let passwordVar = event.target.registerPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar);

    }
  }
);
  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        let usernameVar = event.target.loginUsername.value;
        let passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar);
    }
  });
}

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('transactions', function tasksPublication() {
    return Transactions.find({
      owner: this.userId
    });
  });
}

Meteor.methods({
  'people.insert'(person) {
    // Make sure the user is logged in before inserting a transaction
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    // console.log("Server: just added: "+ person);
    PeopleCollection.insert(person);
  },
});
