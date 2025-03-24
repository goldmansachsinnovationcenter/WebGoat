import React from 'react';

const ReflectedXss: React.FC = () => {
  return (
    <div className="lesson-content">
      <h1>Reflected Cross-Site Scripting (XSS)</h1>
      <p>Reflected XSS is a type of cross-site scripting vulnerability where the malicious script is reflected off the web server, such as in an error message or search result.</p>
      
      <h2>How Reflected XSS Works</h2>
      <p>In a reflected XSS attack:</p>
      <ol>
        <li>The attacker crafts a URL containing malicious code</li>
        <li>The victim is tricked into clicking the URL (via email, message, etc.)</li>
        <li>The web application includes the malicious string from the URL in the response</li>
        <li>The victim's browser executes the script in the context of the vulnerable site</li>
      </ol>
      
      <h2>Common Attack Vectors</h2>
      <ul>
        <li>URL parameters</li>
        <li>Form fields</li>
        <li>HTTP headers (e.g., User-Agent, Referer)</li>
        <li>Cookie values</li>
      </ul>
      
      <h2>Prevention Techniques</h2>
      <ul>
        <li>Input validation</li>
        <li>Output encoding</li>
        <li>Content Security Policy (CSP)</li>
        <li>X-XSS-Protection header</li>
      </ul>
      
      <h2>Exercise</h2>
      <p>Try to inject a script that will display an alert box when the page loads.</p>
    </div>
  );
};

export default ReflectedXss;
