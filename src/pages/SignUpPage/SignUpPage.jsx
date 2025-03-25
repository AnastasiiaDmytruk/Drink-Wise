import css from './SignUpPage.module.css';
import Logo from '../../components/Logo/Logo.jsx';
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';
export const SignUpPage = () => {
  return (
    <div className={css.container}>
      <Logo />
      <SignUpForm />
      <AdvantagesSection />
    </div>
  );
};
