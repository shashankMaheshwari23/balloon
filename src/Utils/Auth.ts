import { setCookie } from "cookies-next"
export const storeToken = (token: string) : boolean =>{
    setCookie('accessToken', token);
    return true
}