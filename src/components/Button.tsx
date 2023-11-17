import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
};

const Button: FC<IButtonProps> = ({ children, className, ...rest }) => {
  const buttonClass = classNames('button', className);
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
