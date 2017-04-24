
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { PeopleCollection } from './peopleCollection.js';

if (Meteor.isServer) {
 describe('Users', () => {

   describe('creation of users', () => {


     it('can create a new rescuer user', () => {
       let userType = "rescuer";
       let username = "rescueruser" + Random.id();
       Accounts.createUser({
           username: username,
           password: "rescuerpass",
           profile: {
             type: userType,
           }
       });


     });

     it('can create a new regular user', () => {

       let userType = "regular";
       let username = "regularuser" + Random.id();
       Accounts.createUser({
           username: username,
           password: "regularpass",
           profile: {
             type: userType,
           }
       });



     });

     it('can change type of a User', () => {

       let userType = "regular";
       let username = "regularuser" + Random.id();
       let newUserId = Accounts.createUser({
           username: username,
           password: "regularpass",
           profile: {
             type: userType,
           }
       });


       Meteor.users.update({_id:newUserId}, {$set:{"profile.type":"rescuer"}})


     });


   });

 });
}
