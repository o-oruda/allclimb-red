import { Get } from '../../utils/https';

// 사용자 로그인 처리(예시)
export const userLogin = () => {
	return Get('/login');
};
