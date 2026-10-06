import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
    // 어떤 URL에서 Proxy를 실행할지 정의합니다. 
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};