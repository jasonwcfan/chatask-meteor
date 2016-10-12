import { Meteor } from 'meteor/meteor';
import publications from './publications';
import seeds from './seeds';

Meteor.startup(() => {
  publications();
  seeds();

  Accounts.onCreateUser(function(options, user) {
    user.invitationsSent = [];
    user.invitationsReceived = [];
    user.friends = [];
    if (options.profile) {
      user.profile = options.profile;
    }
    console.log(user);
    return user;
  });
});