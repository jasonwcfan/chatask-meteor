import {Mongo} from 'meteor/mongo';


Meteor.methods({
    'users.sendFriendRequest': function(sender, recipientEmail) {
        const recipient = Meteor.users.find({emails: {$in: recipientEmail}});
        Meteor.users.update({_id: sender._id}, {$addToSet: {invitationsSent: recipient._id}});
        Meteor.users.update({_id: recipient._id}, {$addToSet: {invitationsReceived: sender._id}});
    },
    //
    // 'users.acceptFriendRequest': function() {
    //
    // },
    //
    // 'users.rejectFriendRequest': function() {
    //
    // }
});

usersSchema = new SimpleSchema({
    createdAt: {type: Date},
    services: {type: Object},
    emails: {type: Object},
    profile: {type: Object},
    invitationsSent: {type: [String]},
    invitationsReceived: {type: [String]},
    friends: {type: [Object]}
});

Meteor.users.attachSchema(usersSchema);