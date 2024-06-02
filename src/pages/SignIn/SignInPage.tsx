import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { userLogin } from '../../api/Login/LoginRequest';


import styles from "./SignInPage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


const SignInPage = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ['login'],
		queryFn: userLogin,
	});

	// if (isPending) return <span>Loading</span>;

	// if (error) return <span>error</span>;

	return <div className={cx('sign-in')}>
				<div className={cx('sign-in__box')}>
					<h1 className={cx('sign-in__title')}>
						<span className="blind">올클</span>
					</h1>
					<p className={cx('sign-in__text')}>
						하나로 어디든 오르는 즐거움
					</p>
				</div>

				<div className={cx('sign-in-bottom')}>
					<button
						className={cx('sign-in-bottom__button','sign-in-bottom__button--kakao')}
						type="button"
					>
						카카오 로그인
					</button>

					<button
						className={cx('sign-in-bottom__button','sign-in-bottom__button--google')}
						type="button"
					>
						구글 로그인
					</button>

					<button
						className={cx('sign-in-bottom__button','sign-in-bottom__button--apple')}
						type="button"
					>
						Apple 로그인
					</button>
				</div>
			</div>;
};

export default SignInPage;
