import React, { useEffect, useState } from 'react';
import logo_otter from './logo-otter.png';
import logo_swirl from './logo-swirl.png';
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
        <div className="App-logo-wrapper">
          <img src={logo_swirl} className="App-logo-swirl" alt="logo-swirl" />
          <img src={logo_otter} className="App-logo-otter" alt="logo-otter" />
        </div>
        <h1 className="App-title">OtterVerse</h1>
        <div className="tile-container">
          {links &&
            Object.entries(links).map(([key, value], index) => (
              <div key={index} className="tile">
                <a
                  href={`http://${key.toLowerCase()}.localhost:3000`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile-link"
                >
                  {value}
                </a>
              </div>
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
