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

Messages.schema = new SimpleSchema({
    text: {type: String},
    createdAt: {type: Date},
    user: {type: [{
        _id: {type: String},
        name: {type: String},
        avatar: {type: Object}
    }]},
    chatId: {type: String}
});

export default Messages;
