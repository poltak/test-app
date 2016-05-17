import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import {
  updateDocumentAction,
  removeDocumentAction,
} from '/imports/ui/redux/actions';

const handleUpdateDocument = (documentId, event) => {
  const title = event.target.value.trim();
  if (title !== '' && event.keyCode === 13) {
    updateDocumentAction({
      _id: documentId,
      update: { title },
      successCb() {
        Bert.alert('Document updated!', 'success');
      },
      errorCb(error) {
        Bert.alert(error.reason, 'danger');
      },
    })();
  }
};

const handleRemoveDocument = (documentId, event) => {
  event.preventDefault();
  // this should be replaced with a styled solution so for now we will
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    removeDocumentAction({
      _id: documentId,
      successCb() {
        Bert.alert('Document removed!', 'success');
      },
      errorCb(error) {
        Bert.alert(error.reason, 'danger');
      },
    })();
  }
};

export const Document = ({ document }) => (
  <ListGroupItem key={ document._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <FormControl
          type="text"
          standalone
          defaultValue={ document.title }
          onKeyUp={ handleUpdateDocument.bind(this, document._id) }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveDocument.bind(this, document._id) }>
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);
