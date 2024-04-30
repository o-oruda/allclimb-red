import React from "react";
import { KAKAO_AUTH_URL } from "../../utils/oauth";

const SignInPage = () => {
    // 로그인 테스트 용도

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL
    }
    return (
        <>
            <button onClick={handleLogin}>카카오톡 로그인</button>
        </>
    )
}

export default SignInPage;