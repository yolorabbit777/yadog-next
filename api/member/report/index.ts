import axios from "axios";
import { yadogBackendUrl } from "@/constants";
import { UserReportRequest, UserReportResponse, UserBetRecordRequest, UserBetRecordResponse, UserFundsRequest, UserFundsResponse } from "@/types";

export const userReport = async (userid: string, token: string, typeset: string, qry_DateStart: string, qry_DateEnd: string, qry_UserName: string) : Promise<UserReportResponse | null> => {
    try {
        const requestBody: UserReportRequest = {
            action: 'UserReport',
            userid: userid,
            token: token,
            typeset: typeset,
            qry_DateStart: qry_DateStart,
            qry_DateEnd: qry_DateEnd,
            qry_UserName: qry_UserName
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as UserReportResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const userBetRecord = async (userid: string, token: string, qry_DateStart: string, qry_DateEnd: string, qry_game: string, qry_rtype: string, qry_UserName: string, rec_perpage: number, page: number) : Promise<UserBetRecordResponse | null> => {
    try {
        const requestBody: UserBetRecordRequest = {
            action: 'SearchTicket',
            userid: userid,
            token: token,
            qry_DateStart: qry_DateStart,
            qry_DateEnd: qry_DateEnd,
            qry_game: qry_game,
            qry_rtype: qry_rtype,
            qry_UserName: qry_UserName,
            rec_perpage: rec_perpage,
            page: page
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as UserBetRecordResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const userFunds = async (userid: string, token: string, type: string, qry_DateStart: string, qry_DateEnd: string, qry_UserName: string, typeset: string) : Promise<UserFundsResponse | null> => {
    try {
        const requestBody: UserFundsRequest = {
            action: 'UserFunds',
            userid: userid,
            token: token,
            type: type,
            qry_DateStart: qry_DateStart,
            qry_DateEnd: qry_DateEnd,
            qry_UserName: qry_UserName,
            typeset: typeset
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as UserFundsResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}   