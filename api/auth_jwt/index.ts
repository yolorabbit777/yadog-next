import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { LoginJWTRequest, LoginJWTResponse, LogoutJWTRequest, LogoutJWTResponse, GetMeJWTRequest, GetMeJWTResponse,
        RenewJWTRequest, RenewJWTResponse
 } from '@/types';

export const loginJWT = async (username: string, password: string): Promise<LoginJWTResponse | null> => {
    try {
        const requestBody: LoginJWTRequest = {
            username: username,
            password: password
        }
        const response = await axios.post(`${yadogBackendUrl}/api/auth/loginJWT`, requestBody);
        if (response.status === 200) {
            return response.data as LoginJWTResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const logoutJWT = async (token: string): Promise<LogoutJWTResponse | null> => {
    try {
        const requestBody: LogoutJWTRequest = {
            
        }
        const response = await axios.post(`${yadogBackendUrl}/api/auth/logout`, requestBody);
        if (response.status === 200) {
            return response.data as LogoutJWTResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}   

export const getMeJWT = async (token: string): Promise<GetMeJWTResponse | null> => {
    try {
        const requestBody: GetMeJWTRequest = {
            
        }
        const response = await axios.get(`${yadogBackendUrl}/api/auth/me`, requestBody);
        if (response.status === 200) {
            return response.data as GetMeJWTResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const renewJWT = async (): Promise<RenewJWTResponse | null> => {
    try {
        const requestBody: RenewJWTRequest = {
        }
        const response = await axios.post(`${yadogBackendUrl}/api/auth/renewToken`, requestBody);
        if (response.status === 200) {
            return response.data as RenewJWTResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}       
