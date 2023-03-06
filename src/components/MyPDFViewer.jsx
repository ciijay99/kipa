import React from 'react';

const MyPDFViewer = ({ match }) => {
  const { filename } = match.params;
  const pdfUrl = `/pdf/${filename}.pdf`;

  return (
    <div className='pdf-viewer'>
      <object
        data={pdfUrl}
        type='application/pdf'
      >
        <p>Sorry, this browser does not support PDF viewing.</p>
      </object>
    </div>
  );
};

export default MyPDFViewer;
