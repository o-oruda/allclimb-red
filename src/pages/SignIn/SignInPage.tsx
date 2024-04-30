import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { userLogin } from '../../api/Login/LoginRequest';

const SignInPage = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ['login'],
		queryFn: userLogin,
	});

	if (isPending) return <span>Loading</span>;

	if (error) return <span>error</span>;

	return <>로그인 페이지 입니다.</>;
};

export default SignInPage;
