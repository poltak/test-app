import { Meteor } from 'meteor/meteor';
import { Store } from '/imports/ui/redux/store';
import { DOCUMENT_COUNT_SET } from '/imports/ui/redux/actions';

Meteor.startup(() => {
  const docCount = 0;

  Store.dispatch({
    type: DOCUMENT_COUNT_SET,
    docCount,
  });
});
