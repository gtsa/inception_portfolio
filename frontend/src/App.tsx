import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch the greeting message from the API
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('api/hello'); // Use relative path for proxy
        setMessage(response.data.message); // Assuming the API returns { message: "Hello World" }
      } catch (err) {
        setError('Error fetching greeting');
        console.error(err);
      }
    };

    fetchGreeting(); // Call the fetch function
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {error ? error : message ? message : 'Loading...'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
