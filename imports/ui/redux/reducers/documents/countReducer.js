import {
  DOCUMENT_INSERT,
  DOCUMENT_UPDATE,
  DOCUMENT_REMOVE,
} from '/imports/ui/redux/actions';
import { INIT_DOC_COUNT } from '/imports/ui/redux/store';

export default function countReducer(state = INIT_DOC_COUNT, action) {
  switch (action.type) {
    case DOCUMENT_INSERT:
      return state + 1;

    case DOCUMENT_REMOVE:
      return state - 1;

    case DOCUMENT_UPDATE:
    default:
      return state;
  }
}
