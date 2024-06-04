import React from "react";

import styles from "./SignUpPage.module.scss";
import classNames from "classnames/bind";
import NavBar from "../../components/NavBar/NavBar";

const cx = classNames.bind(styles);

const SignUpPage = () => {
    return (
        <div className={cx('sign-up')}>
            <NavBar/>
            <button type="button" className={cx('sign-up__skip-button')}>
                건너뛰기
            </button>

            <div className={cx('sign-up-page')}>
                <h3 className="blind">질문 단계</h3>
                {/* TODO [F/E] - 선택시 sign-up-page__step--active 추가 */}
                <div className={cx('sign-up-page__step','sign-up-page__step--active')}>
                    <span className="blind">1단계</span>
                </div>

                <div className={cx('sign-up-page__step')}>
                    <span className="blind">2단계</span>
                </div>

                <div className={cx('sign-up-page__step')}>
                    <span className="blind">3단계</span>
                </div>
            </div>

            <h2 className={cx('sign-up__title')}>
                평소 관심있던<br/>클라이밍장은 어디인가요?
            </h2>

            <div className={cx('sign-up-center')}>
                <ul className={cx('sign-up-center__list')}>
                    <li className={cx('sign-up-center__item')}>
                        {/* TODO [F/E] - 선택시 sign-up-center__button--active 추가 */}
                        <button
                            type="button" 
                            className={cx('sign-up-center__button', 'sign-up-center__button--active')}
                        >
                            신촌담장
                        </button>
                    </li>

                    <li className={cx('sign-up-center__item')}>
                        <button
                            type="button" 
                            className={cx('sign-up-center__button')}
                        >
                            온사이트 클라이밍
                        </button>
                    </li>

                    <li className={cx('sign-up-center__item')}>
                        <button
                            type="button" 
                            className={cx('sign-up-center__button')}
                        >
                            락랜드클라이밍
                        </button>
                    </li>
                </ul>
                
                <button
                    type="button" 
                    className={cx('sign-up-center__button', 'sign-up-center__button--plus')}
                >
                    직접추가
                </button>
            </div>

            {/* TODO [F/E] -- 하나라도 선택시 sign-up-center-bottom--active 추가 */}
            <div className={cx('sign-up-center-bottom', 'sign-up-center-bottom--active')}>
                <button 
                    type="button"
                    className={cx('sign-up-center-bottom__button')}
                >
                    다음
                </button>
            </div>
        </div>
    )
}

export default SignUpPage;