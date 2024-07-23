import { create } from 'zustand';

interface SignUpState {
	gymList: string[];
	setGymList: (gymList: string[]) => void;

	// 사용자 직접 추가 클라이밍장 목록
	customGymList?: string[];
	setCustomGymList: (customList: string[]) => void;
}

const defaultGroundList = [
	'신촌담장',
	'온사이트클라이밍',
	'손상원클라이밍 강남점',
	'허브클라이밍',
	'치즈클라이밍',
	'몽키즈',
	'크래커클라이밍',
];

const useSignUpStore = create<SignUpState>((set) => ({
	gymList: defaultGroundList,
	setGymList: (gymList: string[]) => set({ gymList }),
	customGymList: undefined,
	setCustomGymList: (customGymList) => set({ customGymList }),
}));

export default useSignUpStore;
