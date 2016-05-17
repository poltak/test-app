import {
  insertDocument,
  updateDocument,
  removeDocument,
} from '/imports/api/documents/methods';
import * as actionTypes from './actionTypes';
import { Store } from '/imports/ui/redux/store';

const buildAction = (type) => ({ type });

export function insertDocumentAction({ title, successCb, errorCb }) {
  return () => {
    insertDocument.call({ title }, (error) => {
      if (error) {
        errorCb(error);
      } else {
        Store.dispatch(buildAction(actionTypes.DOCUMENT_INSERT));
        successCb();
      }
    });
  };
}

export function updateDocumentAction({ _id, update, successCb, errorCb }) {
  return () => {
    updateDocument.call({ _id, update }, (error) => {
      if (error) {
        errorCb(error);
      } else {
        Store.dispatch(buildAction(actionTypes.DOCUMENT_UPDATE));
        successCb();
      }
    });
  };
}

export function removeDocumentAction({ _id, successCb, errorCb }) {
  return () => {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        errorCb(error);
      } else {
        Store.dispatch(buildAction(actionTypes.DOCUMENT_REMOVE));
        successCb();
      }
    });
  };
}

export function setCountAction({ docCount = 0 }) {
  if (docCount < 0) {
    return;
  }

  Store.dispatch({
    type: actionTypes.DOCUMENT_COUNT_SET,
    docCount,
  });
}
