import React from 'react';
import { useTranslation } from 'react-i18next';
import './TileContainer.css';


interface TileContainerProps {
  links: { [key: string]: string } | null;
  visible: boolean;
}

const TileContainer: React.FC<TileContainerProps> = ({ links, visible }) => {
  const { t }: { t: (key: string) => string } = useTranslation();


  return (
    <div className={`tile-container ${visible ? 'visible' : ''}`}>
      {links &&
        Object.entries(links).map(([key, value], index) => (
          <div key={index} className="tile">
            <a
              href={`http://${value.toLowerCase()}.localhost:3000`}
              target="_blank"
              rel="noopener noreferrer"
              className="tile-link"
            >
              {t(key.toLowerCase())}
            </a>
          </div>
        ))}
    </div>
  );
};

export default TileContainer;
