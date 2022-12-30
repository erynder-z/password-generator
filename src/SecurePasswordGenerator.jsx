import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import generateSecurePassword from './generateSecurePassword';

function SecurePasswordGenerator() {
  const intl = useIntl();

  const [password, setPassword] = React.useState('');
  const [length, setLength] = React.useState(16);
  const [includeUppercase, setIncludeUppercase] = React.useState(true);
  const [includeNumbers, setIncludeNumbers] = React.useState(true);
  const [includeSymbols, setIncludeSymbols] = React.useState(true);

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleIncludeUppercaseChange = (e) => {
    setIncludeUppercase(e.target.checked);
  };

  const handleIncludeNumbersChange = (e) => {
    setIncludeNumbers(e.target.checked);
  };

  const handleIncludeSymbolsChange = (e) => {
    setIncludeSymbols(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword(
      generateSecurePassword(
        length,
        includeUppercase,
        includeNumbers,
        includeSymbols
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="length">
        <FormattedMessage id="length" />:
        <input
          type="number"
          id="length"
          value={length}
          onChange={handleLengthChange}
          min={8}
          max={64}
          required
        />
      </label>
      <label htmlFor="include-uppercase">
        <input
          type="checkbox"
          id="include-uppercase"
          checked={includeUppercase}
          onChange={handleIncludeUppercaseChange}
        />
        <FormattedMessage id="include-uppercase" />
      </label>
      <label htmlFor="include-numbers">
        <input
          type="checkbox"
          id="include-numbers"
          checked={includeNumbers}
          onChange={handleIncludeNumbersChange}
        />
        <FormattedMessage id="include-numbers" />
      </label>
      <label htmlFor="include-symbols">
        <input
          type="checkbox"
          id="include-symbols"
          checked={includeSymbols}
          onChange={handleIncludeSymbolsChange}
        />
        <FormattedMessage id="include-symbols" />
      </label>
      <button type="submit">
        <FormattedMessage id="generate" />
      </button>
      <div className="password-container">
        {password && <p className="password">{password}</p>}
      </div>
    </form>
  );
}

export default SecurePasswordGenerator;
