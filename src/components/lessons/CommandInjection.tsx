import React from 'react';

const CommandInjection: React.FC = () => {
  return (
    <div className="lesson-content">
      <h1>Command Injection</h1>
      <p>Command injection is an attack in which the goal is to execute arbitrary commands on the host operating system via a vulnerable application.</p>
      
      <h2>What is Command Injection?</h2>
      <p>Command injection attacks are possible when an application passes unsafe user supplied data (forms, cookies, HTTP headers etc.) to a system shell. In this attack, the attacker-supplied operating system commands are usually executed with the privileges of the vulnerable application.</p>
      
      <h2>Common Command Injection Techniques</h2>
      <ul>
        <li><strong>Direct Command Injection</strong>: Directly appending commands using operators like semicolons, ampersands, pipes</li>
        <li><strong>Blind Command Injection</strong>: When there is no direct output from the command, but the command is still executed</li>
        <li><strong>Time-based Command Injection</strong>: Using time delays to determine if a command was executed</li>
        <li><strong>Out-of-band Command Injection</strong>: Exfiltrating data through alternative channels</li>
      </ul>
      
      <h2>Prevention Techniques</h2>
      <ul>
        <li>Avoid calling OS commands directly</li>
        <li>Use APIs instead of OS commands</li>
        <li>Implement proper input validation</li>
        <li>Use allowlists for permitted values</li>
        <li>Run with least privileges</li>
      </ul>
      
      <h2>Exercise</h2>
      <p>Try to inject commands to retrieve sensitive information from the server.</p>
    </div>
  );
};

export default CommandInjection;
