import { FC } from 'react';
import Container from './Container';
import Button from './Button';

const Header: FC = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <a href="/" className="header__logo-link" aria-label="logo">
          <img src="/img/logo.png" alt="logo" width={50} height={50} className="header__logo" />
        </a>
        <Button>
          Log In
        </Button>
      </Container>
    </header>
  );
};

export default Header;
