import {Mongo} from 'meteor/mongo';


Meteor.methods({
    'users.sendFriendRequest': function(sender, recipientEmail) {
        console.log('hello');
        const recipient = Meteor.users.findOne({'emails.address': {$in: ['hello']}});
        if (recipient) {
            console.log(Meteor.users.update({_id: sender._id}, {$addToSet: {invitationsSent: recipient._id}}));
            console.log(Meteor.users.update({_id: recipient._id}, {$addToSet: {invitationsReceived: sender._id}}));
        }
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

Schema = {};

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
});

usersSchema = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    registered_emails: {
        type: Array,
        optional: true
    },
    'registered_emails.$': {
        type: Object,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    invitationsSent: {type: [String]},
    invitationsReceived: {type: [String]},
    friends: {type: [Object]}
});

Meteor.users.attachSchema(usersSchema);