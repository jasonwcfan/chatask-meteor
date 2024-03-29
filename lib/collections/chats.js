import {Mongo} from 'meteor/mongo';

const Chats = new Mongo.Collection('chats');

Meteor.methods({
    'chats.insert': function(name, participants) {
        return Chats.insert({
            name: name,
            participants: participants.map( (user) => { return user._id})
        })
    },

    'chats.remove': function(chat) {
        return Chats.remove({
            _id: chat._id
        })
    },

    'chats.addUser': function(chat, user) {
        return Chats.update({_id: chat._id}, {$addToSet: {participants:
            user._id
        }})
    }
});

Chats.schema = new SimpleSchema({
    name: {type: String},
    participants: {type: [{
        _id: {type: String},
        name: {type: String}
    }]}
});

export default Chats;
