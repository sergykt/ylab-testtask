import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type buttonProps = {
  children?: ReactNode;
  className?: string;
};

const Button: FC<buttonProps> = ({ children, className }) => {
  const buttonClass = classNames('button', className);
  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
