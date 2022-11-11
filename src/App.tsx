import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { login } from './services/auth';
import { AppRoutes } from './routes/appRoutes';
import { GlobalStyles } from './ui/styles/global-styles';
import { Header } from './components/header/header';
import { ThemeProvider } from 'styled-components';
import { Theme } from './ui/styles/theme';

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
