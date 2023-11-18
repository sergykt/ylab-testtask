import { createContext, useState, ReactNode } from 'react';

interface IModalContextProps {
  isModalActive: boolean;
  closeModal: () => void;
  openModal: () => void;
}

interface IModalProviderProps {
  children?: ReactNode;
}

export const ModalContext = createContext<IModalContextProps>({
  isModalActive: false,
  closeModal: () => {},
  openModal: () => {}
});

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isModalActive, setModalActive] = useState<boolean>(false);

  const closeModal = () => setModalActive(false);
  const openModal = () => setModalActive(true);

  return (
    <ModalContext.Provider value={{ isModalActive, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};