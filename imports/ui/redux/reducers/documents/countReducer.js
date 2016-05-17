import {
  DOCUMENT_INSERT,
  DOCUMENT_UPDATE,
  DOCUMENT_REMOVE,
  DOCUMENT_COUNT_SET,
} from '/imports/ui/redux/actions';
import { INIT_DOC_COUNT } from '/imports/ui/redux/store';

export default function countReducer(state = INIT_DOC_COUNT, action) {
  switch (action.type) {
    case DOCUMENT_INSERT:
      return state + 1;

    case DOCUMENT_REMOVE:
      return state - 1;

    case DOCUMENT_COUNT_SET:
      if (action.docCount < 0) {
        return state;
      }
      return action.docCount;

    case DOCUMENT_UPDATE:
    default:
      return state;
  }
}
