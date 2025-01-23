import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo_otter from './logo-otter.png';
import logo_swirl from './logo-swirl.png';
import './App.css';
import axios from 'axios';

interface Link {
  [key: string]: string;
}

function App() {
  const [showTiles, setShowTiles] = useState(false);
  const [links, setLinks] = useState<Link | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation();
  const { t }: { t: (key: string) => string } = useTranslation();


  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('/api/hello');
        setLinks(response.data.links); // Expecting { app1: "App1", app2: "App2", ... }
      } catch (err) {
        setError('Error fetching links');
        console.error(err);
      }
    };

    fetchGreeting();
  }, []);

  const toggleTiles = () => {
    setShowTiles((prev) => !prev); // Toggle the state to show/hide tiles
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-wrapper" onClick={toggleTiles}>
          <img src={logo_swirl} className="App-logo-swirl" alt="logo-swirl" />
          <img src={logo_otter} className="App-logo-otter" alt="logo-otter" />
        </div>
        <h1 className="App-title" onClick={toggleTiles}>OtterVerse</h1>

        {/* Conditionally render the tiles with a smooth transition */}
        <div className={`tile-container ${showTiles ? 'visible' : ''}`}>
          {links &&
            Object.entries(links).map(([key, value], index) => (
              <div key={index} className="tile">
                <a
                  href={`http://${key.toLowerCase()}.localhost:3000`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile-link"
                >
                  {t(value.toLowerCase())}
                </a>
              </div>
            ))}
        </div>


        {/* Language Switcher Buttons */}
        <div className={`language-switcher ${showTiles ? 'visible' : ''}`}>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('fr')}>FR</button>
          <button onClick={() => changeLanguage('el')}>EL</button>
        </div>
        <div className={`welcome-message ${showTiles ? 'invisible' : ''}`}>
          <h1 className="App-title" onClick={toggleTiles}>{t('welcome')}</h1>
        </div>
        <div className={`call-for-action-message ${showTiles ? 'visible' : ''}`}>
          <h1 className="App-title" onClick={toggleTiles}>{t('select_tile')}</h1>
        </div>


      </header>
    </div>
  );
}

export default App;
