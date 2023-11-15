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
        <h3 className="popup__title">Registration completed!</h3>
        <p className="popup__text">
          We have sent you an email with instructions to activate your account.
        </p>
        <button className="popup__close-button" onClick={onHide} type="button" />
      </div>
    </div>
  );
};

export default Popup;
