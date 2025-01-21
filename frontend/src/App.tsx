import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface Link {
  [key: string]: string;
}

function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [links, setLinks] = useState<Link | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('/api/hello'); // Use relative path for proxy
        setMessage(response.data.message);
        setLinks(response.data.links); // Expecting { app1: "App1", app2: "App2", ... }
      } catch (err) {
        setError('Error fetching greeting');
        console.error(err);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{error ? error : message ? message : 'Loading...'}</p>
        <ul>
          {links &&
            Object.entries(links).map(([key, value], index) => (
              <li key={index}>
                <a
                  href={`http://${key.toLowerCase()}.localhost:3000`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value}
                </a>
              </li>
            ))}
        </ul>
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
