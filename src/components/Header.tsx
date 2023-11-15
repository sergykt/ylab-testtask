import { FC } from 'react';
import Container from './Container';
import Button from './Button';

const Header: FC = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <a href="/" className="header__logo-link">
          <img src="/img/logo.png" alt="logo" width={50} height={50} className="header__logo" />
        </a>
        <Button>
          Sign In
        </Button>
      </Container>
    </header>
  );
};

export default Header;
