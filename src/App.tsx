import { FC, useEffect } from 'react';
import { useModal } from './hooks';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';

const App: FC = () => {
  const { isModalActive } = useModal();

  useEffect(() => {
    if (isModalActive) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [isModalActive]);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="login">
          <Container className="login__container">
            <LoginForm />
          </Container>
        </div>
      </main>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
