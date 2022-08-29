import { UserProvider } from '@auth0/nextjs-auth0';
import Menu from '../components/Menu';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Menu />
      <Component {...pageProps} />
    </UserProvider>
  );
}
