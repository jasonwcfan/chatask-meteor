import {Mongo} from 'meteor/mongo';

const Messages = new Mongo.Collection('messages');

Meteor.methods({
    'messages.insert': function(message, chat, user) {
        return Messages.insert({
            text: message.text,
            createdAt: new Date(),
            user: {
                _id: user._id,
                name: user.profile.name,
                avatar: user.avatar
            },
            chatId: chat._id
        })
    }
});

export default Messages;
