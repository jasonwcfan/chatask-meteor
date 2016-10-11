import {Mongo} from 'meteor/mongo';

const Chats = new Mongo.Collection('chats');

Meteor.methods({
    'chats.insert': function(name, participants) {
        return Chats.insert({
            name: name,
            participants: participants.map( (user) => { return {
                _id: user._id, name: user.profile.name}})
        })
    },

    'chats.addUser': function(chat, user) {
        return Chats.update({_id: chat._id}, {$addToSet: {participants: {
            _id: user._id,
            name: user.profile.name
        }}})
    }
});

export default Chats;
