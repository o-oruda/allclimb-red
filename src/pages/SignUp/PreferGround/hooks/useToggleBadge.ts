import { useState } from 'react';

const useToggleBadge = () => {
	const [activeGround, setActiveGround] = useState<any>({});

	const toggleBadge = (ground: string) => {
		setActiveGround((prevStat: any) => ({
			...prevStat,
			[ground]: !prevStat[ground],
		}));
	};

	return {
		activeGround,
		toggleBadge,
	};
};

export default useToggleBadge;
