import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertDocumentAction } from '/imports/ui/redux/actions';

const handleInsertDocument = (event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    insertDocumentAction({
      title,
      successCb() {
        target.value = '';
        Bert.alert('Document added!', 'success');
      },
      errorCb(error) {
        Bert.alert(error.reason, 'danger');
      },
    })();
  }
};

export const AddDocument = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertDocument }
      placeholder="Type a document title and press enter..."
    />
  </FormGroup>
);
