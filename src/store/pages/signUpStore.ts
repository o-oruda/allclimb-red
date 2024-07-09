import { create } from 'zustand';

interface SignUpState {
	// 관심 암장
	preferGround: string;

	// 활동지역
	activityArea: string;

	// 경력
	careerDuration: string;
}

interface State {
	// 현재 스텝
	step: number;

	// 회원가입 선택 정보
	signUpState: SignUpState;

	// 현재 스텝 업데이트
	updateStep: (step: number) => void;

	// 회원가입 선택 정보 업데이트
	updateSignUpState: (newValue: string) => void;
}

const useSignUpStore = create<State>((set) => ({
	step: 1,
	signUpState: {
		preferGround: '',
		activityArea: '',
		careerDuration: '',
	},
	updateStep: (step: number) => set({ step }),
	updateSignUpState: (newValue: string) =>
		set((state) => ({
			signUpState: {
				...state.signUpState,
				...(state.step === 1 && { preferGround: newValue }),
				...(state.step === 2 && { activityArea: newValue }),
				...(state.step === 3 && { careerDuration: newValue }),
			},
		})),
}));

export default useSignUpStore;
