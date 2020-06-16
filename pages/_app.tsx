import { AppProps } from 'next/app';
import configureStore from '../store';
import { Provider } from 'react-redux';
import Layout from '../components/layout';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
