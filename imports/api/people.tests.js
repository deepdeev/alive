
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { PeopleCollection } from './peopleCollection.js';

if (Meteor.isServer) {
 describe('PeopleCollection', () => {

   describe('creation of people', () => {
     const personId = Random.id();

     beforeEach(() => {
       PeopleCollection.remove({});
       console.log("Deletes the collection objects");
     });

     it('can create a new found person', () => {
       let newPerson = {
         id : personId,
         name: "Pablito Clavito",
         foundDate: new Date(),
         state : "Found",
         place: "Uniandes",
         healthState: "Alive",
         message: "I need a Doctor!",
         img: '/data/images/p6.jpg'
       }
      PeopleCollection.insert(newPerson);
     });

     it('can create a new wanted person', () => {
       let newPerson = {
         id : personId,
         name: "Pablito Clavito",
         foundDate: new Date(),
         state : "Wanted",
         place: "Uniandes",
         healthState: "Alive",
         message: "I need a Doctor!",
         img: '/data/images/p6.jpg'
       }
      PeopleCollection.insert(newPerson);
     });


   });

   describe('changing its state', () => {
     const personId = Random.id();

     beforeEach(() => {
       PeopleCollection.remove({});
       let newPerson = {
         id : personId,
         name: "Pablito Clavito",
         foundDate: new Date(),
         state : "Wanted",
         place: "Uniandes",
         healthState: "Alive",
         message: "I need a Doctor!",
         img: '/data/images/p6.jpg'
       }
      PeopleCollection.insert(newPerson);

     });

     it('can change state of a person from wanted to found', () => {
       PeopleCollection.update(personId , {$set: {state: "Found"}} );

     });

     it('can change state of a person from found to wanted', () => {
       PeopleCollection.update(personId , {$set: {state: "Wanted"}} );

     });


   });
 });
}
