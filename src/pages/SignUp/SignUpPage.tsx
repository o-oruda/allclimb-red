import React, { useState } from 'react';

import styles from './SignUpPage.module.scss';
import classNames from 'classnames/bind';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';
import BottomModal from '../../components/Modal/BottomModal/BottomModal';
import StepBar from '../../components/StepBar/StepBar';
import PreferGround from './PreferGround';

const cx = classNames.bind(styles);

const SignUpPage = () => {
	const [step, setStep] = useState(1);

	return (
		<>
			<div className={cx('sign-up')}>
				<NavBar />
				<button type="button" className={cx('sign-up__skip-button')}>
					건너뛰기
				</button>

				<StepBar hiddenTitle="질문 단계" step={step} totalStep={3} />

				{/* 관심있는 클라이밍장 선택 */}
				<PreferGround />

				{/* TODO [F/E] - 활동지역 선택  */}
				<h2 className={cx('sign-up__title')}>
					주로 활동하는 지역은
					<br />
					어디인가요?
				</h2>

				<div className={cx('sign-up-area')}>
					<ul className={cx('sign-up-area__list')}>
						<li className={cx('sign-up-area__item')}>
							{/* TODO [F/E] - 선택시 sign-up-area__button--active 추가 */}
							<button
								type="button"
								className={cx(
									'sign-up-area__button',
									'sign-up-area__button--active',
								)}
							>
								서울
							</button>
						</li>

						<li className={cx('sign-up-area__item')}>
							<button
								type="button"
								className={cx('sign-up-area__button')}
							>
								경기
							</button>
						</li>

						<li className={cx('sign-up-area__item')}>
							<button
								type="button"
								className={cx('sign-up-area__button')}
							>
								강원
							</button>
						</li>

						<li className={cx('sign-up-area__item')}>
							<button
								type="button"
								className={cx('sign-up-area__button')}
							>
								충청
							</button>
						</li>

						<li className={cx('sign-up-area__item')}>
							<button
								type="button"
								className={cx('sign-up-area__button')}
							>
								전라
							</button>
						</li>

						<li className={cx('sign-up-area__item')}>
							<button
								type="button"
								className={cx('sign-up-area__button')}
							>
								경상
							</button>
						</li>

						<li className={cx('sign-up-area__item')}>
							<button
								type="button"
								className={cx('sign-up-area__button')}
							>
								부산
							</button>
						</li>

						<li className={cx('sign-up-area__item')}>
							<button
								type="button"
								className={cx('sign-up-area__button')}
							>
								제주
							</button>
						</li>

						<li className={cx('sign-up-area__item')}>
							<button
								type="button"
								className={cx('sign-up-area__button')}
							>
								전국
							</button>
						</li>
					</ul>

					{/* TODO [F/E] - 날짜 선택  */}
					<h2 className={cx('sign-up__title')}>
						클라이밍,
						<br />
						언제 시작했나요?
					</h2>
				</div>

				{/* TODO [F/E] - 하나라도 선택시 sign-up-area-bottom--active 추가 */}
				<div className={cx('sign-up-bottom', 'sign-up-bottom--active')}>
					<button
						type="button"
						className={cx('sign-up-bottom__button')}
					>
						다음
					</button>
				</div>
			</div>
			<BottomModal>d</BottomModal>
		</>
	);
};

export default SignUpPage;
