import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type containerProps = {
  children?: ReactNode;
  className?: string;
};

const Container: FC<containerProps> = ({ children, className }) => {
  const containerClass = classNames('container', className);
  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};

export default Container;
