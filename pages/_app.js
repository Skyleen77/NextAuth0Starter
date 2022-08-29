import '../styles/globals.css';

import { UserProvider } from '@auth0/nextjs-auth0';
import Menu from '../components/Menu';
import Profile from '../components/Profile';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Menu />
      <Profile />
      <Component {...pageProps} />
    </UserProvider>
  );
}
