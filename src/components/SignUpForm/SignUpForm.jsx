import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './SignUpForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { ErrorMessage } from 'formik';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectIsError);

  const schema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .matches(/@[^@]+\.[^@]+$/)
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    values: { email: '', password: '', repeatPassword: '' },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = async values => {
    try {
      await dispatch({
        email: values.email,
        password: values.password,
      }).unwrap();
      toast.success('You are successfully signed up@');
      reset();
    } catch (error) {
      errorMessage && toast.error(errorMessage);
    }
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <input
            className={css.input}
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email')}
          />
          {errors}
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor="password">
            Password
          </label>
          <input
            className={css.input}
            id="password"
            type="text"
            placeholder="Enter your password"
            {...register('password')}
          />
          {errors}
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor="confirmPassword">
            Confirm your password
          </label>
          <input
            className={css.input}
            id="confirmPassword"
            type="text"
            placeholder="Confirm your password"
            {...register('confirmPassword')}
          />
          {errors}
        </div>
        <button className={css.btn} type="submit">
          Sign Up
        </button>
      </form>
      <p className={css.text}>
        Already have an account?{' '}
        <Link className={css.signinLink} to="signin">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
