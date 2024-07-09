import React, { useState } from 'react';

import styles from './SignUpPage.module.scss';
import classNames from 'classnames/bind';
import NavBar from 'components/NavBar/NavBar';
import StepBar from 'components/StepBar/StepBar';
import PreferGround from './PreferGround';
import ActivityArea from './ActivityArea';
import CareerDuration from './CareerDuration';

const cx = classNames.bind(styles);

const SignUpPage = () => {
	const [step, setStep] = useState(3);

	return (
		<>
			<div className={cx('sign-up')}>
				<NavBar />
				<button type="button" className={cx('sign-up__skip-button')}>
					건너뛰기
				</button>

				<StepBar hiddenTitle="질문 단계" step={step} totalStep={3} />

				{/* 관심있는 클라이밍장 선택 */}
				{step === 1 && <PreferGround />}

				{/* 활동지역 선택 */}
				{step === 2 && <ActivityArea />}

				{/* 경력 선택 */}
				{step === 3 && <CareerDuration />}
			</div>
		</>
	);
};

export default SignUpPage;
