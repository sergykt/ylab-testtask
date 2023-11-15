import { FC, useRef, useEffect, useState } from 'react';
import Button from './Button';

const LoginForm: FC = () => {
  return (
    <form className="form">
      <p className="form__title">Sign In</p>
      <div className="form__control">
        <label htmlFor="email" className="form__label">Email</label>
        <input
          className="form__input"
          name="email"
          id="email"
          type="email"
          placeholder="Type your email"
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
          required
        />
      </div>
      <Button className="form__button">Submit</Button>
    </form >
  );
};

export default LoginForm;
