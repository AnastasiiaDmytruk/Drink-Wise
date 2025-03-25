import css from './SignUpPage.module.css';

import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';

const SignUpPage = () => {
  return (
    <div className={css.container}>
      <SignUpForm />
      <div className={css.advantagesWrapper}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignUpPage;
