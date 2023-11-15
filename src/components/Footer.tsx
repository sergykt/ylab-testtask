import { FC } from 'react';
import Container from './Container';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Container>
        <p className="footer__text">© 2023 Created by Sergei Sivtsev</p>
      </Container>
    </footer>
  );
};

export default Footer;
