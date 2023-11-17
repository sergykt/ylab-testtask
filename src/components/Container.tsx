import { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
};

const Container: FC<IContainerProps> = ({ children, className, ...rest }) => {
  const containerClass = classNames('container', className);
  return (
    <div className={containerClass} {...rest}>
      {children}
    </div>
  );
};

export default Container;
