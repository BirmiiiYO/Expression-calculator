import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { Header, Routing } from './components';

import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
      <Routing />
    </ThemeProvider>
  );
};

export default App;
