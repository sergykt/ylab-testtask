import { FC, useRef, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useModal } from '../hooks';
import { IUser } from '../types';
import userService from '../api';
import Button from './Button';

const validationSchema = Yup.object({
  email: Yup.string().trim().required('This field is required').email('Invalid email'),
  password: Yup.string().trim().required('This field is required'),
});

const LoginForm: FC = () => {
  const { openModal } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);

  const togglePasswordHidden = () => setPasswordHidden(!isPasswordHidden);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const initialValues: IUser = {
    email: '',
    password: '',
    remember: false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await userService.login(values);
        openModal();
        resetForm();
      } catch (err) {
        console.log(err);
        setSubmitting(false);
      }
    },
  });

  return (
    <form className="form" id="login-form" onSubmit={formik.handleSubmit}>
      <h2 className="form__title">Log In</h2>
      <div className="form__control">
        <label htmlFor="email" className="form__label">Email</label>
        <div className="form__input-wrapper">
          <div className="form__input-ico" id="email-ico" />
          <input
            className="form__input"
            name="email"
            id="email"
            type="email"
            placeholder="Type your email"
            aria-label="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            disabled={formik.isSubmitting}
            ref={inputRef}
            autoComplete="email"
            required
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className="form__invalid-tooltip">{formik.errors.email}</p>
        )}
      </div>
      <div className="form__control">
        <label htmlFor="password" className="form__label">Password</label>
        <div className="form__input-wrapper">
          <div className="form__input-ico" id="password-ico" />
          <input
            className="form__input"
            name="password"
            id="password"
            type={isPasswordHidden ? 'password' : 'text'}
            placeholder="Type your password"
            aria-label="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            disabled={formik.isSubmitting}
            autoComplete="off"
            required
          />
          {formik.values.password && <button
            className="form__show-password-btn"
            type="button"
            aria-label="show password"
            onClick={togglePasswordHidden}
          >
            {isPasswordHidden ? 'Show' : 'Hide'}
          </button>}
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="form__invalid-tooltip">{formik.errors.password}</p>
        )}
      </div>
      <div className="form__check">
        <input type="checkbox" className="form__check-input" id="remember" name="remember"
          checked={formik.values.remember} onChange={formik.handleChange} aria-checked={formik.values.remember} disabled={formik.isSubmitting} />
        <label className="form__check-label" htmlFor="remember">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M27 55L6 33 9 29 26 41 55 12 59 16z" /></svg>
          Remember me
        </label>
      </div>
      <Button className="form__button" type="submit" disabled={formik.isSubmitting}>Submit</Button>
    </form >
  );
};

export default LoginForm;
