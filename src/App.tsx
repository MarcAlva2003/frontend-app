import { useEffect, useMemo, useState } from 'react';

import { AppRoutes } from './routes/appRoutes';
import { GlobalStyles } from './ui/styles/global-styles';
import { Header } from './components/header/header';
import { Theme } from './ui/styles/theme';
import { ThemeProvider } from 'styled-components';
import { login } from './services/auth';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  // const [hideHeader, setHideHeader] = useState<boolean>(false);
  // useEffect(() => {
  //   console.log('EFFECT')
  //   const hide = pathname === '/login'
  //   setHideHeader(hide);
  // }, [])
  // const hideHeader = useMemo(()=>{
  //   console.log('asdasdasdas');
  //   return pathname === '/login'
  // },[]);
  const getHeaderIsHidden = () => {
    return pathname === '/login'
    || pathname === '/register'
  }

  return (
    <>
      <ThemeProvider
        theme={Theme}
      >
        <GlobalStyles/>
        {!getHeaderIsHidden() && (
          <Header />
        )}
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
