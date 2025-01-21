import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('/api/hello'); // Use relative path for proxy
        setMessage(response.data.message); // Assuming the API returns { message: "Hello World" }
      } catch (err) {
        setError('Error fetching greeting');
        console.error(err);
      }
    };

    fetchGreeting(); // Call the fetch function
  }, []);

  const appLinks = [
    { name: 'App1', url: 'http://app1.localhost:3000' },
    { name: 'App2', url: 'http://app2.localhost:3000' },
    { name: 'API', url: 'http://api.localhost:3000' },
    { name: 'iMosaic', url: 'http://imosaic.localhost:3000' },
    { name: 'Backlog', url: 'http://backlog.localhost:3000' },
    { name: 'Portfolio', url: 'http://portfolio.localhost:3000' },
    { name: 'Blog', url: 'http://blog.localhost:3000' },
    { name: 'Hub', url: 'http://localhost:3000' },
    { name: 'Python Apps', url: 'http://python.localhost:3000' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{error ? error : message ? message : 'Loading...'}</p>
        <ul>
          {appLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
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
