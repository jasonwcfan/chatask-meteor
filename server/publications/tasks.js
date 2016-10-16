import { Meteor } from 'meteor/meteor';
import { Tasks } from '/lib/collections';

export default () => {
    Meteor.publish('tasks', () => {
        return Tasks.find();
    });
}
