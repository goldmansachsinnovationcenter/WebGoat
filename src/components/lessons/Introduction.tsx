import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="lesson-content">
      <h1>WebGoat Introduction</h1>
      <p>WebGoat is a deliberately insecure web application maintained by OWASP designed to teach web application security lessons.</p>
      <p>This application is meant to demonstrate common server-side application flaws. The exercises are intended to be used by people to learn about application security and penetration testing techniques.</p>
      
      <h2>What is WebGoat?</h2>
      <p>WebGoat is a deliberately insecure application that allows interested developers just like you to test vulnerabilities commonly found in Java-based applications that use common and popular open source components.</p>
      
      <h2>Why the name WebGoat?</h2>
      <p>The server acts as a sacrificial goat, allowing attacks to be successfully carried out against it. The server is written in Java and is cross-platform (Windows, Linux, Mac OS X, etc.)</p>
      
      <h2>How do I use WebGoat?</h2>
      <p>In the menu on the left you'll find the lessons that are available. They're grouped by type. Click on the lesson you want to try and read the instructions on the right. If you're a newbie, you might want to start with the General lessons and work your way up to the more complex ones.</p>
    </div>
  );
};

export default Introduction;
