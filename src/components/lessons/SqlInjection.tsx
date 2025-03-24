import React from 'react';

const SqlInjection: React.FC = () => {
  return (
    <div className="lesson-content">
      <h1>SQL Injection</h1>
      <p>SQL Injection is a code injection technique that exploits vulnerabilities in the interface between web applications and database servers.</p>
      
      <h2>What is SQL Injection?</h2>
      <p>SQL injection occurs when user-supplied data is not properly validated and is directly included in SQL queries. If successful, an attacker can:</p>
      <ul>
        <li>Read sensitive data from the database</li>
        <li>Modify database data (insert, update, delete)</li>
        <li>Execute administration operations on the database</li>
        <li>Recover the content of a given file on the DBMS file system</li>
      </ul>
      
      <h2>Common SQL Injection Techniques</h2>
      <ul>
        <li><strong>Error-based SQL Injection</strong>: Forcing the database to generate an error that reveals information</li>
        <li><strong>Union-based SQL Injection</strong>: Using the UNION SQL operator to combine results from multiple SELECT statements</li>
        <li><strong>Blind SQL Injection</strong>: Asking the database true/false questions and determining the answer based on the application's response</li>
        <li><strong>Time-based SQL Injection</strong>: Using database functions that delay responses to infer information</li>
      </ul>
      
      <h2>Exercise</h2>
      <p>Try to exploit a SQL injection vulnerability to extract unauthorized information from the database.</p>
    </div>
  );
};

export default SqlInjection;
