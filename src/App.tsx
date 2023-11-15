import { FC } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import LoginForm from './components/LoginForm';

const App: FC = () => {
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
    </div>
  );
}

export default App;
