import { FC, MouseEvent, useEffect } from 'react';
import classNames from 'classnames';

interface IPopupProps {
  onHide: () => void;
  isActive: boolean;
}

const Popup: FC<IPopupProps> = ({ onHide, isActive }) => {
  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onHide();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onHide();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const popupClass = classNames('popup', {
    'popup_active': isActive,
  });

  return (
    <div className={popupClass} onClick={handleBackgroundClick}>
      <div className="popup__body">
        <h3 className="popup__title">Success!</h3>
        <p className="popup__text">
          Welcome aboard! We're thrilled to have you as part of our community. Your login was successful, and you're now all set to explore and enjoy our platform. If you have any questions or need assistance, don't hesitate to reach out to us. Happy exploring!
        </p>
        <button className="popup__close-button" onClick={onHide} type="button" />
      </div>
    </div>
  );
};

export default Popup;
