import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { LoginRequest, LoginResponse, LogoutRequest, LogoutResponse, 
        RegisterRequest, RegisterResponse, RegisterByPhoneRequest, RegisterByPhoneResponse,
        VerifyMsgRequest, VerifyMsgResponse, ResetPasswordBySMSRequest, ResetPasswordBySMSResponse } from '@/types';

export const login = async (userid: number, username: string, password: string): Promise<LoginResponse | null> => {
    try {
        const requestBody: LoginRequest = {
            action: 'LoginProcess',
            userid: userid,
            username: username,
            password: password

        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as LoginResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const logout = async (userid: number, token: string): Promise<LogoutResponse | null> => {
    try {
        const requestBody: LogoutRequest = {
            action: 'LogoutProcess',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as LogoutResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const register = async (username: string, password: string, password_confirmation: string, email: string, cellphone: string, code: string, PromoLinkName: string): Promise<RegisterResponse | null> => {
    try {
        const requestBody: RegisterRequest = {
            action: 'PromoLink_create',
            username: username,
            password: password,
            password_confirmation: password_confirmation,
            email: email,
            cellphone: cellphone,
            code: code,
            PromoLinkName: PromoLinkName
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as RegisterResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const registerByPhone = async (cellphone: string, code: string, password_confirmation: string, password: string, username: string): Promise<RegisterByPhoneResponse | null> => {
    try {
        const requestBody: RegisterByPhoneRequest = {
            cellphone: cellphone,
            code: code,
            password_confirmation: password_confirmation,
            password: password,
            username: username
        }
        const response = await axios.post(`${yadogBackendUrl}/api/auth/registerByPhone`, requestBody);
        if (response.status === 200) {
            return response.data as RegisterByPhoneResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}   

export const verifyMsg = async (phone: string, type: string): Promise<VerifyMsgResponse | null> => {
    try {
        const requestBody: VerifyMsgRequest = {
            phone: phone,
            type: type
        }
        const response = await axios.post(`${yadogBackendUrl}/api/auth/send/verifyMsg`, requestBody);
        if (response.status === 200) {
            return response.data as VerifyMsgResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const resetPasswordBySMS = async (phone: string, code: string, password: string, password_confirmation: string): Promise<ResetPasswordBySMSResponse | null> => {
    try {
        const requestBody: ResetPasswordBySMSRequest = {
            action: 'resetPasswordBySMS',
            phone: phone,
            code: code,
            password: password,
            password_confirmation: password_confirmation
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as ResetPasswordBySMSResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
