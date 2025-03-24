import React from 'react';

const PasswordReset: React.FC = () => {
  return (
    <div className="lesson-content">
      <h1>Password Reset</h1>
      <p>Password reset functionality is a common feature in web applications that allows users to regain access to their accounts when they forget their passwords.</p>
      
      <h2>Common Password Reset Methods</h2>
      <ul>
        <li><strong>Email-based reset</strong>: A reset link is sent to the user's registered email</li>
        <li><strong>Security questions</strong>: User answers pre-configured security questions</li>
        <li><strong>SMS verification</strong>: A code is sent to the user's registered phone number</li>
        <li><strong>Temporary password</strong>: A temporary password is generated and sent to the user</li>
      </ul>
      
      <h2>Security Considerations</h2>
      <p>Password reset functionality can introduce security vulnerabilities if not implemented correctly:</p>
      <ul>
        <li>Reset tokens should be random, unique, and expire after a short time</li>
        <li>Security questions should not be easily guessable or publicly available information</li>
        <li>Reset links should be sent only to verified email addresses</li>
        <li>Users should be notified when their password is changed</li>
      </ul>
      
      <h2>Exercise</h2>
      <p>Try to identify vulnerabilities in the password reset functionality of this application.</p>
    </div>
  );
};

export default PasswordReset;
