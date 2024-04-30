import { useEffect } from "react";

const KakaoAuthHandle = () => {
 
    // 인가코드
  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  const state = params.get('state');


  useEffect(() => {}, [])

}

export default KakaoAuthHandle;