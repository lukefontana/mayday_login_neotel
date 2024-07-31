import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock, faNetworkWired  } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/Login.module.css'; 
import '../app/globals.css';
export const runtime = 'experimental-edge';

library.add(faUser, faLock); 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
