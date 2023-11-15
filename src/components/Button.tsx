import { FC } from 'react';
import classNames from 'classnames';
import { IButtonProps } from '../types';

const Button: FC<IButtonProps> = ({ children, className, ...rest }) => {
  const buttonClass = classNames('button', className);
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
