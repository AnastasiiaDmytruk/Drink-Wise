import WelcomeSection from '../../components/WelcomeSection/WelcomeSection.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
