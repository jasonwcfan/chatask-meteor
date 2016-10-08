import {Mongo} from 'meteor/mongo';

const Chats = new Mongo.Collection('chats');

Meteor.methods({
    'chats.insert': function(user) {
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

export default Chats;
