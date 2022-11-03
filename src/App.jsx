import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { Header, Routing } from './components';

import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState(dark);
  const [history, setHistory] = useState([]);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  const addToHistory = (value) => {
    setHistory(history.concat(value));
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
      <Routing history={history} setHistory={setHistory} addToHistory={addToHistory} />
    </ThemeProvider>
  );
};

export default App;
