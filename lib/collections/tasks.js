import {Mongo} from 'meteor/mongo';

const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
    'tasks.insert': function(title, body, assignedTo, assignedFrom) {
        return Tasks.insert({
            title: title,
            body: body,
            assignedTo: {
                _id: assignedTo._id,
                name: assignedTo.profile.name
            },
            assignedFrom: {
                _id: assignedFrom._id,
                name: assignedFrom.profile.name
            }
        })
    },
    //
    // 'tasks.remove': function(chat) {
    //     return Chats.remove({
    //         _id: chat._id
    //     })
    // },
    //
    // 'tasks.update': function(chat, user) {
    //     return Chats.update({_id: chat._id}, {$addToSet: {participants:
    //     user._id
    //     }})
    // }
});

Tasks.schema = new SimpleSchema({
    title: {type: String},
    body: {type: String},
    assignedTo: {type: Object},
    assignedFrom: {type: Object}
});

export default Tasks;