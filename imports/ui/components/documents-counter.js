import React from 'react';

export const DocumentsCounter = ({ docCount }) => (
  <h3>
    Doc count: { docCount }
  </h3>
);

DocumentsCounter.propTypes = {
  docCount: React.PropTypes.number,
};
