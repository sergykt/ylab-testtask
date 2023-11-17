import { FC, useRef, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from './Button';
import { IUser } from '../types';
import userService from '../api';
import Popup from './Popup';

const validationSchema = Yup.object({
  email: Yup.string().trim().required('This field is required').email('Invalid email'),
  password: Yup.string().trim().required('This field is required'),
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
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await userService.login(values);
        setCompleted(true);
        resetForm();
      } catch (err) {
        console.log(err);
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <form className="form" id="login-form" onSubmit={formik.handleSubmit}>
        <h2 className="form__title">Log In</h2>
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
        <Button className="form__button" type="submit" disabled={formik.isSubmitting}>Submit</Button>
      </form >
      <Popup onHide={() => setCompleted(false)} isActive={isCompleted} />
    </>
  );
};

export default LoginForm;
