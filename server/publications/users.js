import { Meteor } from 'meteor/meteor';

export default () => {
    Meteor.publish('users', () => {
        return Meteor.users.find();
    });
}
