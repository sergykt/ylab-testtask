import { FC, useRef, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from './Button';
import { IUser } from '../types';
import userService from '../api';
import Popup from './Popup';

const validationSchema = Yup.object({
  email: Yup.string().trim().required('This field is required').email('Invalid email'),
  password: Yup.string().trim().required('This field is required').min(5, 'From 5 to 20 characters').max(20),
  confirmPassword: Yup.string().trim().required('This field is required').oneOf([Yup.ref('password')], 'Passwords must match'),
});

const LoginForm: FC = () => {
  const [isCompleted, setCompleted] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const initialValues: IUser = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await userService.create(values);
        setCompleted(true);
        console.log('submited')
      } catch (err) {
        console.log(err);
        setSubmitting(false);
      }
    },
  });

  console.log(isCompleted);

  return (
    <form className="form" id="login-form" onSubmit={formik.handleSubmit}>
      <h2 className="form__title">Sign Up</h2>
      <div className="form__control">
        <label htmlFor="email" className="form__label">Email</label>
        <input
          className="form__input"
          name="email"
          id="email"
          type="email"
          placeholder="Type your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          disabled={formik.isSubmitting}
          ref={inputRef}
          required
        />
      </div>
      <div className="form__control">
        <label htmlFor="password" className="form__label">Password</label>
        <input
          className="form__input"
          name="password"
          id="password"
          type="password"
          placeholder="Type your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          disabled={formik.isSubmitting}
          required
        />
      </div>
      <div className="form__control">
        <label htmlFor="confirmPassword" className="form__label">Confirm Password</label>
        <input
          className="form__input"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          disabled={formik.isSubmitting}
          required
        />
      </div>
      <Button className="form__button" type="submit">Submit</Button>
      <Popup onHide={() => setCompleted(false)} isActive={isCompleted} />
    </form >
  );
};

export default LoginForm;
