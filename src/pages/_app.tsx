import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
