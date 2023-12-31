import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './normalize.css';
import './index.scss';
import { ModalProvider } from './contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
