import classNames from 'classnames/bind';

import styles from '../SignUpPage.module.scss';

import { useEffect, useState } from 'react';
import useToggleBadge from './hooks/useToggleBadge';
import Badge from 'components/Badge';
import Search from 'components/Search';
import { useSearchParams } from 'react-router-dom';
import BottomModal from 'components/Modal/BottomModal/BottomModal';
import useModalStore from 'store/components/modalStore';

const cx = classNames.bind(styles);

const defaultGroundList = [
	'신촌담장',
	'온사이트클라이밍',
	'손상원클라이밍 강남점',
	'허브클라이밍',
	'치즈클라이밍',
	'몽키즈',
	'크래커클라이밍',
];

const PreferGround = () => {
	const [groundList, setGroundList] = useState<string[]>(defaultGroundList);
	const [searchParams, setSearchParams] = useSearchParams();

	const { activeGround, toggleBadge } = useToggleBadge();
	const { openModal } = useModalStore();

	return (
		<>
			<h2 className={cx('sign-up__title')}>
				평소 관심있던
				<br />
				클라이밍장은 어디인가요?
			</h2>

			<div className={cx('sign-up-center')}>
				<ul className={cx('sign-up-center__list')}>
					{groundList.map((ground: string) => (
						<li className={cx('sign-up-center__item')} key={ground}>
							{/* TODO [F/E] - 선택시 sign-up-center__button--active 추가 */}
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

			{/* TODO [F/E] - 검색 */}
			<BottomModal>
				<div className={cx('sign-up-search')}>
					<h3 className={cx('sign-up-search__title')}>
						관심있는 클라이밍 장을
						<br />
						추가해보세요!
					</h3>

					<div className={cx('sign-up-search__box')}>
						<Search />
					</div>
				</div>
			</BottomModal>

			<div
				className={cx('sign-up-bottom', {
					'sign-up-bottom--active':
						Object.values(activeGround).includes(true),
				})}
			>
				<button type="button" className={cx('sign-up-bottom__button')}>
					다음
				</button>
			</div>
		</>
	);
};

export default PreferGround;
