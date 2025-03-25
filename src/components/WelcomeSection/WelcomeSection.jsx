import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import css from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <div className={css.container}>
      <Logo />
      <section className={css.section}>
        <h2>Record daily water intake and track</h2>
        <h1>Water consumption tracker</h1>
        <div className={css.linkWrapper}>
          <Link className={css.signup} to="/signup">
            Try tracker
          </Link>
          <Link className={css.signin} to="/signin">
            Sign in
          </Link>
        </div>
      </section>
    </div>
  );
};
export default WelcomeSection;
