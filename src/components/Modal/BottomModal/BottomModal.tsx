import React from "react";

import styles from "./BottomModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type BottomModalProps = {
    children: React.ReactNode;
  };

  const BottomModal: React.FC<BottomModalProps> = ({ children }) => {
    return (
      <div className={cx('bottom-modal')}>
        <div className={cx('bottom-modal__top')}>
            <h3 className={cx('bottom-modal__title')}>dd</h3>
            <button
                type="button"
                className={cx('bottom-modal__button')}
            >
                <span className="blind">닫기</span>
            </button>
        </div>
        <div className={cx('bottom-modal__content')}>
            {children}
        </div>
      </div>
    );
  };

export default BottomModal;