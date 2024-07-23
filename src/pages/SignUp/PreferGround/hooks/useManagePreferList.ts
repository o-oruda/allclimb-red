import useSignUpStore from 'store/pages/signUpStore';

const useManagePreferList = () => {
	const { setCustomGymList } = useSignUpStore();

	// 사용자 직접 클라이밍장 추가
	const addPreferGround = (newList: string[]) => {
		setCustomGymList(newList);
	};

	return { addPreferGround };
};

export default useManagePreferList;
