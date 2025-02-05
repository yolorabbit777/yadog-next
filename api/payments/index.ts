import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { GetBankCodeListsRequest, GetBankCodeListsResponse, DepositRequest, DepositResponse } from '@/types';

export const getBankCodeLists = async (userid: number, token: string): Promise<GetBankCodeListsResponse | null> => {
    try {
        const requestBody: GetBankCodeListsRequest = {
            action: 'BankCodeList',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetBankCodeListsResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const deposit = async (userid: number, token: string, bankCode: string, orderAmount: number, zfbLicense: string, pay_bank: string): Promise<DepositResponse | null> => {
    try {
        const requestBody: DepositRequest = {
            action: 'AccountDeposit',
            userid: userid,
            token: token,
            bankCode: bankCode,
            orderAmount: orderAmount,
            zfbLicense: zfbLicense,
            pay_bank: pay_bank
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as DepositResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
