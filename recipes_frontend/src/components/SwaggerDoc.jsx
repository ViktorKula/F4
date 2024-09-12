import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerDoc = () => {
  return (
    <SwaggerUI
      url="http://localhost:8000/swagger.json"
      docExpansion="list"
    />
  );
};

export default SwaggerDoc;
