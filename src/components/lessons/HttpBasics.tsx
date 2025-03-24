import React from 'react';

const HttpBasics: React.FC = () => {
  return (
    <div className="lesson-content">
      <h1>HTTP Basics</h1>
      <p>HTTP is the protocol that allows web servers and browsers to exchange data over the web. It is a request/response protocol.</p>
      
      <h2>HTTP Request Methods</h2>
      <p>The most common HTTP request methods are:</p>
      <ul>
        <li><strong>GET</strong> - Used to request data from a specified resource</li>
        <li><strong>POST</strong> - Used to send data to a server to create/update a resource</li>
        <li><strong>PUT</strong> - Used to send data to a server to create/update a resource</li>
        <li><strong>DELETE</strong> - Used to delete a specified resource</li>
      </ul>
      
      <h2>HTTP Response Status Codes</h2>
      <p>HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:</p>
      <ul>
        <li><strong>1xx (Informational)</strong>: The request was received, continuing process</li>
        <li><strong>2xx (Successful)</strong>: The request was successfully received, understood, and accepted</li>
        <li><strong>3xx (Redirection)</strong>: Further action needs to be taken in order to complete the request</li>
        <li><strong>4xx (Client Error)</strong>: The request contains bad syntax or cannot be fulfilled</li>
        <li><strong>5xx (Server Error)</strong>: The server failed to fulfill an apparently valid request</li>
      </ul>
      
      <h2>Exercise</h2>
      <p>Try to send a GET request to the server and observe the response.</p>
    </div>
  );
};

export default HttpBasics;
