import classNames from 'classnames/bind';

import styles from '../SignUpPage.module.scss';

import useToggleBadge from './hooks/useToggleBadge';
import Badge from 'components/Badge';
import { useSearchParams } from 'react-router-dom';
import useModalStore from 'store/components/modalStore';
import GroundAddModal from './GroundAddModal/GroundAddModal';
import useSignUpStore from 'store/pages/signUpStore';

const cx = classNames.bind(styles);

const PreferGround = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const { activeGround, toggleBadge } = useToggleBadge();
	const { openModal } = useModalStore();
	const { gymList, customGymList } = useSignUpStore();

	return (
		<>
			<h2 className={cx('sign-up__title')}>
				평소 관심있던
				<br />
				클라이밍장은 어디인가요?
			</h2>

			<div className={cx('sign-up-center')}>
				<ul className={cx('sign-up-center__list')}>
					{gymList.map((ground: string) => (
						<li className={cx('sign-up-center__item')} key={ground}>
							<Badge
								className={cx('sign-up-center__button', {
									'sign-up-center__button--active':
										activeGround[ground],
								})}
								onClick={() => toggleBadge(ground)}
							>
								{ground}
							</Badge>
						</li>
					))}
					{customGymList?.map((customGym: string) => (
						<li
							className={cx('sign-up-center__item')}
							key={customGym}
						>
							<Badge
								className={cx(
									'sign-up-center__button',
									'sign-up-center__button--active',
								)}
							>
								{customGym}
							</Badge>
						</li>
					))}
				</ul>

				<Badge
					className={cx(
						'sign-up-center__button',
						'sign-up-center__button--plus',
					)}
					onClick={openModal}
				>
					직접추가
				</Badge>
			</div>

			{/* 클라이밍장 직접 추가 모달 */}
			<GroundAddModal />

			<div
				className={cx('sign-up-bottom', {
					'sign-up-bottom--active':
						Object.values(activeGround).includes(true) ||
						customGymList?.length,
				})}
			>
				<button
					type="button"
					className={cx('sign-up-bottom__button')}
					onClick={() => console.log(activeGround)}
				>
					다음
				</button>
			</div>
		</>
	);
};

export default PreferGround;
