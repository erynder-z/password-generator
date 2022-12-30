import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import SecurePasswordGenerator from './SecurePasswordGenerator';
import './App.css';

import messages_en from './locales/en.json';
import messages_de from './locales/de.json';
import messages_ja from './locales/ja.json';

const messages = {
  en: messages_en,
  de: messages_de,
  ja: messages_ja,
};

function App() {
  const [language, setLanguage] = React.useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="App">
        <div className="language-selector">
          {/* render the language selector buttons */}
          <button value="en" onClick={handleLanguageChange}>
            EN
          </button>
          <button value="de" onClick={handleLanguageChange}>
            DE
          </button>
          <button value="ja" onClick={handleLanguageChange}>
            JA
          </button>
        </div>
        <h1>
          <FormattedMessage id="app-title" />
        </h1>
        <SecurePasswordGenerator />
      </div>
    </IntlProvider>
  );
}

export default App;
