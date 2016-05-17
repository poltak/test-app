import { composeWithTracker } from 'react-komposer';
import { DocumentsCounter } from '../components/documents-counter';
import { Store } from '/imports/ui/redux/store';

const onPropsChange = (props, onData) => {
  Store.subscribe(() => {
    const docCount = Store.getState().docCount;
    onData(null, { docCount });
  });
};

export default composeWithTracker(onPropsChange)(DocumentsCounter);
