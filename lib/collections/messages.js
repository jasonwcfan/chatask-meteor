import {Mongo} from 'meteor/mongo';

const Messages = new Mongo.Collection('messages');

Meteor.methods({
    'messages.insert': function(message, user) {
        console.log(message);
        return Messages.insert({
            text: message.text,
            createdAt: new Date(),
            user: {
                _id: user._id,
                name: user.name
            },
            chatId: message.chatId
        })
    }
});

export default Messages;
