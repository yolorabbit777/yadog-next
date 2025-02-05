import axios from "axios";
import { yadogBackendUrl } from "@/constants";
import { ActivityRewardRequest, ActivityRewardResponse, GetEventListRequest, GetEventListResponse, GetMissionListRequest, GetMissionListResponse,
    GetVipSignInInfoRequest, GetVipSignInInfoResponse, PlayRouletteRequest, PlayRouletteResponse, VipSignInRequest, VipSignInResponse
 } from "@/types";

export const activityReward = async (userid: string, token: string, act: number) : Promise<ActivityRewardResponse | null> => {
    try {
        const requestBody: ActivityRewardRequest = {
            action: 'ActivityReward',
            userid: userid,
            token: token,
            act: act
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as ActivityRewardResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const getEventList = async (userid: string, token: string) : Promise<GetEventListResponse | null> => {
    try {
        const requestBody: GetEventListRequest = {
            action: 'GetEventList',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetEventListResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const getMissionList = async (userid: string, token: string) : Promise<GetMissionListResponse | null> => {
    try {
        const requestBody: GetMissionListRequest = {
            action: 'getMissionList',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetMissionListResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const getVipSignInInfo = async (userid: string, token: string) : Promise<GetVipSignInInfoResponse | null> => {
    try {
        const requestBody: GetVipSignInInfoRequest = {
            action: 'getVipSignInInfo',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetVipSignInInfoResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const playRoulette = async (userid: string, token: string) : Promise<PlayRouletteResponse | null> => {
    try {
        const requestBody: PlayRouletteRequest = {
            action: 'playRoulette',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as PlayRouletteResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const vipSignIn = async (userid: string, token: string) : Promise<VipSignInResponse | null> => {
    try {
        const requestBody: VipSignInRequest = {
            action: 'vipSignIn',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as VipSignInResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
