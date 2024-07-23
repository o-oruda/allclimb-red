import React, { useCallback, useEffect, useState } from 'react';

import styles from './SignUpPage.module.scss';
import classNames from 'classnames/bind';
import NavBar from 'components/NavBar/NavBar';
import StepBar from 'components/StepBar/StepBar';
import PreferGround from './PreferGround';
import ActivityArea from './ActivityArea';
import CareerDuration from './CareerDuration';
import useSignUpStore from 'store/pages/signUpStore';

const cx = classNames.bind(styles);

const SignUpPage = () => {
	const { step, updateStep, signUpState } = useSignUpStore();

	/**
	 * [건너뛰기] 클릭 이벤트
	 */
	const skipStep = useCallback(() => updateStep(step + 1), [step]);

	useEffect(() => {
		if (step === 4) {
			// TODO 회원가입 API
			console.log(signUpState);
		}
	}, [step]);

	return (
		<>
			<div className={cx('sign-up')}>
				{step <= 3 && (
					<>
						<NavBar />
						<button
							type="button"
							className={cx('sign-up__skip-button')}
							onClick={skipStep}
						>
							건너뛰기
						</button>
						<StepBar
							hiddenTitle="질문 단계"
							step={step}
							totalStep={3}
						/>
					</>
				)}

				{/* 관심있는 클라이밍장 선택 */}
				{step === 1 && <PreferGround />}

				{/* 활동지역 선택 */}
				{step === 2 && <ActivityArea />}

				{/* 경력 선택 */}
				{step === 3 && <CareerDuration />}

				{/* TODO 완료화면이 필요할 거 같음~? */}
				{step === 4 && (
					<p
						style={{
							color: 'red',
							fontSize: '30px',
							padding: '15px',
						}}
					>
						회원가입 완료
					</p>
				)}
			</div>
		</>
	);
};

export default SignUpPage;
