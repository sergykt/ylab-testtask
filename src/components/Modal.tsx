import { FC, MouseEvent, useEffect } from 'react';
import { useModal } from '../hooks';
import classNames from 'classnames';

const Modal: FC = () => {
  const { isModalActive, closeModal } = useModal();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const popupClass = classNames('popup', {
    'popup_active': isModalActive,
  });

  return (
    <div className={popupClass} onClick={handleBackgroundClick}>
      <div className="popup__body">
        <h3 className="popup__title">Success!</h3>
        <p className="popup__text">
          Welcome aboard! We're thrilled to have you as part of our community. Your login was successful, and you're now all set to explore and enjoy our platform. If you have any questions or need assistance, don't hesitate to reach out to us. Happy exploring!
        </p>
        <button className="popup__close-button" onClick={closeModal} type="button" aria-label="close" />
      </div>
    </div>
  );
};

export default Modal;
