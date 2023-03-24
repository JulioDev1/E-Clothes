import { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { GlobalStyles } from '../global/styled';
import { MainWrapper } from './_styled';

const App = ({
  Component,
  pageProps
}: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyles />

      <NavBar />

      <MainWrapper>
        <Component
          {...pageProps}
        />
      </MainWrapper>

      <Footer />
    </>
  );
};

export default App;
