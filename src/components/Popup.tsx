import { FC } from 'react';
import classNames from 'classnames';

interface IPopupProps {
  onHide: () => void;
  isActive: boolean;
}

const Popup: FC<IPopupProps> = ({ onHide, isActive }) => {
  const popupClass = classNames('popup', {
    'popup_active': isActive,
  });

  return (
    <div className={popupClass}>
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
