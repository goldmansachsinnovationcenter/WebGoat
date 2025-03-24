import React from 'react';

const StoredXss: React.FC = () => {
  return (
    <div className="lesson-content">
      <h1>Stored Cross-Site Scripting (XSS)</h1>
      <p>Stored XSS (also known as persistent XSS) is a type of cross-site scripting vulnerability where the malicious script is stored on the target server and executed when users access the affected page.</p>
      
      <h2>How Stored XSS Works</h2>
      <p>In a stored XSS attack:</p>
      <ol>
        <li>The attacker injects malicious code into a website's database</li>
        <li>The malicious code is stored permanently on the target server</li>
        <li>When victims visit the affected page, the script is served as part of the page</li>
        <li>The victim's browser executes the script in the context of the vulnerable site</li>
      </ol>
      
      <h2>Common Attack Vectors</h2>
      <ul>
        <li>Comment fields</li>
        <li>User profiles</li>
        <li>Message boards</li>
        <li>Product reviews</li>
        <li>Any user-generated content that is stored and displayed to other users</li>
      </ul>
      
      <h2>Prevention Techniques</h2>
      <ul>
        <li>Input validation</li>
        <li>Output encoding</li>
        <li>Content Security Policy (CSP)</li>
        <li>Sanitizing user input</li>
        <li>Using safe JavaScript frameworks</li>
      </ul>
      
      <h2>Exercise</h2>
      <p>Try to inject a script into a comment field that will be executed when other users view the page.</p>
    </div>
  );
};

export default StoredXss;
