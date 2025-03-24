import React from 'react';

const JWT: React.FC = () => {
  return (
    <div className="lesson-content">
      <h1>JSON Web Tokens (JWT)</h1>
      <p>JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.</p>
      
      <h2>JWT Structure</h2>
      <p>A JWT consists of three parts separated by dots (.):</p>
      <ul>
        <li><strong>Header</strong> - Contains the type of token and the signing algorithm being used</li>
        <li><strong>Payload</strong> - Contains the claims (statements about an entity) and additional data</li>
        <li><strong>Signature</strong> - Used to verify that the sender of the JWT is who it says it is</li>
      </ul>
      
      <h2>Common JWT Vulnerabilities</h2>
      <ul>
        <li><strong>None algorithm</strong> - Some implementations accept 'none' as an algorithm</li>
        <li><strong>Weak signature verification</strong> - Not properly validating the signature</li>
        <li><strong>Information disclosure</strong> - Storing sensitive data in non-encrypted JWTs</li>
        <li><strong>Token replay</strong> - Reusing a token after it should have been invalidated</li>
      </ul>
      
      <h2>Exercise</h2>
      <p>Try to manipulate a JWT token to gain unauthorized access to protected resources.</p>
    </div>
  );
};

export default JWT;
