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
    const fetchLinks = async () => {
      try {
        const response = await axios.get('/api/dashboard_links');
        setLinks(response.data.links);
        setError(null); // Clear any previous errors
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(`Error ${err.response.status}: ${err.response.data.message}`);
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
        console.error('Error fetching dashboard links:', err);
      }
    };

    fetchLinks();
  }, []);

  const toggleTiles = () => {
    setShowTiles((prev) => !prev);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <header className="App-header">

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

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
