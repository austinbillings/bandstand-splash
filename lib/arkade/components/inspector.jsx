import React from 'react';
import { prettyPrint } from 'arkade/utils/text-utils';

const Inspector = ({ data }) => (
  <pre style={{ maxWidth: '100%', whiteSpace: 'pre-wrap' }}>
    <code>{prettyPrint(data)}</code>
  </pre>
);

export default Inspector;
