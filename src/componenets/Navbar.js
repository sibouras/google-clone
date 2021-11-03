import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h3>google</h3>
      </Link>
      <Search />
    </nav>
  );
};
