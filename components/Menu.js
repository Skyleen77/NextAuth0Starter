import Profile from './Profile';

export default function Menu() {
  return (
    <div>
      <a href="/api/auth/login">Login</a> <a href="/api/auth/logout">Logout</a>
      <Profile />
    </div>
  );
}
