import { useEffect } from 'react';
import { login } from './services/auth';
import { AppRoutes } from './routes/appRoutes';
import { GlobalStyles } from './ui/styles/global-styles';
import { Header } from './components/header/header';
import { ThemeProvider } from 'styled-components';
import { Theme } from './ui/styles/theme';

function App() {
  return (
    <>
      <ThemeProvider
        theme={Theme}
      >
        <GlobalStyles/>
        <Header />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
