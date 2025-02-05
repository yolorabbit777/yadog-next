import axios from "axios";
import { yadogBackendUrl } from "@/constants";
import { GetMemberInfoRequest, GetMemberInfoResponse, UpdateMemberInfoRequest, UpdateMemberInfoResponse, GetUserFundListRequest, GetUserFundListResponse,
    GetActivityLogListRequest, GetActivityLogListResponse
 } from "@/types";

export const getMemberInfo = async (userid: string, token: string, limitMoney: string) : Promise<GetMemberInfoResponse | null> => {
    try {
        const requestBody: GetMemberInfoRequest = {
            action: 'MemberInfo',
            userid: userid,
            token: token,
            limitMoney: limitMoney
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetMemberInfoResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const updateMemberInfo = async (userid: string, token: string, oldPwd: string, password: string, password_confirmation: string, nickname: string, remark: string, cellphone: string) : Promise<UpdateMemberInfoResponse | null> => {
    try {
        const requestBody: UpdateMemberInfoRequest = {
            action: 'UpdateMemberInfo',
            userid: userid,
            token: token,
            oldPwd: oldPwd,
            password: password,
            password_confirmation: password_confirmation,
            nickname: nickname,
            remark: remark,
            cellphone: cellphone
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as UpdateMemberInfoResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const getUserFundList = async (userid: string, token: string, start: string, end: string, page: number, perPage: number) : Promise<GetUserFundListResponse | null> => {
    try {
        const requestBody: GetUserFundListRequest = {
            action: 'UserFundList',
            userid: userid,
            token: token,
            start: start,
            end: end,
            page: page,
            perPage: perPage
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetUserFundListResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const getActivityLogList = async (userid: string, token: string, start: string, end: string) : Promise<GetActivityLogListResponse | null> => {
    try {
        const requestBody: GetActivityLogListRequest = {
            action: 'getActivityLogList',
            userid: userid,
            token: token,
            start: start,
            end: end
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetActivityLogListResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
