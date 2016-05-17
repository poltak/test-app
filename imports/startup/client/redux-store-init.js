import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Documents } from '/imports/api/documents/documents';
import { Store } from '/imports/ui/redux/store';
import { DOCUMENT_COUNT_SET } from '/imports/ui/redux/actions';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const subscription = Meteor.subscribe('documents');

    if (subscription.ready()) {
      const documents = Documents.find();
      const docCount = documents.count();

      Store.dispatch({
        type: DOCUMENT_COUNT_SET,
        docCount,
      });
    }
  });
});
