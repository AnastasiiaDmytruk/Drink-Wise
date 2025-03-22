import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link className={css.logo} to="/">
      DRINK-WISE
    </Link>
  );
};

export default Logo;
