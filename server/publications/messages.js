import { Meteor } from 'meteor/meteor';
import { Messages } from '/lib/collections';

export default () => {
    Meteor.publish('messages', () => {
        return Messages.find();
    });
}
