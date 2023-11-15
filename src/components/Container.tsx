import { FC } from 'react';
import classNames from 'classnames';
import { IContainerProps } from '../types';

const Container: FC<IContainerProps> = ({ children, className, ...rest }) => {
  const containerClass = classNames('container', className);
  return (
    <div className={containerClass} {...rest}>
      {children}
    </div>
  );
};

export default Container;
