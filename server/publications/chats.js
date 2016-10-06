import { Meteor } from 'meteor/meteor';
import { Chats } from '/lib/collections';

export default () => {
  Meteor.publish('chats', () => {
    return Chats.find();
  });
}
