import { Meteor } from 'meteor/meteor';
import '../imports/api/tweets';


Meteor.startup(() => {
  // code to run on server at startup
  console.log(Meteor.settings.private.github, 'private');
  console.log(Meteor.settings.public.analytics, 'public');
});
