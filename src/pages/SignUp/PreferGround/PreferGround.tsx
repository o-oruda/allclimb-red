import classNames from 'classnames/bind';

import styles from '../SignUpPage.module.scss';

import useToggleBadge from './hooks/useToggleBadge';
import Badge from 'components/Badge';
import useModalStore from 'store/components/modalStore';
import GroundAddModal from './GroundAddModal/GroundAddModal';
import useSignUpStore from 'store/pages/signUpStore';
import useManagePreferList from './hooks/useManagePreferList';

const cx = classNames.bind(styles);

const PreferGround = () => {
	const { activeGym, toggleBadge } = useToggleBadge();
	const { getActiveGymList } = useManagePreferList();
	const { openModal } = useModalStore();
	const { gymList, customGymList, updateStep, updateSignUpState, step } =
		useSignUpStore();

	return (
		<>
			<h2 className={cx('sign-up__title')}>
				평소 관심있던
				<br />
				클라이밍장은 어디인가요?
			</h2>

			<div className={cx('sign-up-center')}>
				<ul className={cx('sign-up-center__list')}>
					{/* 기본 클라이밍장 정보 */}
					{gymList.map((ground: string) => (
						<li className={cx('sign-up-center__item')} key={ground}>
							<Badge
								className={cx('sign-up-center__button', {
									'sign-up-center__button--active':
										activeGym[ground],
								})}
								onClick={() => toggleBadge(ground)}
							>
								{ground}
							</Badge>
						</li>
					))}

					{/* 사용자 직접 추가 클라이밍장 정보 */}
					{customGymList.length > 0 &&
						customGymList.map((customGym: string) => (
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
						Object.values(activeGym).includes(true) ||
						customGymList.length,
				})}
			>
				<button
					type="button"
					className={cx('sign-up-bottom__button')}
					onClick={() => {
						const updateList = [
							...getActiveGymList(activeGym),
							...customGymList,
						];
						updateStep(step + 1);
						updateSignUpState([...updateList]);
					}}
				>
					다음
				</button>
			</div>
		</>
	);
};

export default PreferGround;
