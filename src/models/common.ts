export interface CommonResponse<T> {
	code: 'SUCCESS' | 'ERROR' | 'FAIL';
	data: T;
	message: string;
}

// 기본적인 셀렉트 데이터
export interface Select {
	label: string;
	value: string;
}
