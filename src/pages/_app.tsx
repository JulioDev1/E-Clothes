import { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { GlobalStyles } from '../global/styled';
import { MainWrapper } from './_styled';
import store from './store';
import { Provider } from 'react-redux';

const App = ({
  Component,
  pageProps
}: AppProps): JSX.Element => {
  return (
    <>
      <Provider store={store}>
          <GlobalStyles />

          <NavBar />

          <MainWrapper>
            <Component
              {...pageProps}
            />
          </MainWrapper>

          <Footer />
      </Provider>
      </>
  );
};

export default App;
