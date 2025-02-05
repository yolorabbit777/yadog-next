import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { GetBalanceRequest, GetBalanceResponse, GetNewsListRequest, GetNewsListResponse,
        GetEventListRequest, GetEventListResponse, GetGameListRequest, GetGameListResponse,
        GetGameSlotsRequest, GetGameSlotsResponse, GetGameStatisticsRequest, GetGameStatisticsResponse,
        GetGameKindsRequest, GetGameKindsResponse, GetGameListsRequest, GetGameListsResponse,
        GetRankListRequest, GetRankListResponse, GetRichListRequest, GetRichListResponse,
        GetVipSettingRequest, GetVipSettingResponse
 } from '@/types';

export const getBalance = async (): Promise<GetBalanceResponse | null> => {
    try {
        const requestBody: GetBalanceRequest = {
            action: 'UserNowInformation'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetBalanceResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
} 

export const getNewsList = async (): Promise<GetNewsListResponse | null> => {
    try {
        const requestBody: GetNewsListRequest = {
            action: 'GetNewsList'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetNewsListResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getEventList = async (): Promise<GetEventListResponse | null> => {
    try {
        const requestBody: GetEventListRequest = {
            action: 'GetEventList'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetEventListResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}   

export const getGameSlots = async (): Promise<GetGameSlotsResponse | null> => {
    try {
        const requestBody: GetGameSlotsRequest = {
            action: 'getGameSlots'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetGameSlotsResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getGameStatistics = async (): Promise<GetGameStatisticsResponse | null> => {
    try {
        const requestBody: GetGameStatisticsRequest = {
            action: 'getGameStatistics'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetGameStatisticsResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getGameList = async (game_type: string): Promise<GetGameListResponse | null> => {
    try {
        const requestBody: GetGameListRequest = {
            action: 'getGameList',
            game_type: game_type
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetGameListResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getGameKinds = async (): Promise<GetGameKindsResponse | null> => {
    try {
        const requestBody: GetGameKindsRequest = {
            action: 'getGameKinds'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetGameKindsResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}   

export const getGameLists = async (userid: number, token: string): Promise<GetGameListsResponse | null> => {
    try {
        const requestBody: GetGameListsRequest = {
            action: 'getGameList',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetGameListsResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getRankList = async (): Promise<GetRankListResponse | null> => {
    try {
        const requestBody: GetRankListRequest = {
            action: 'getRankList'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetRankListResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getRichList = async (): Promise<GetRichListResponse | null> => {
    try {
        const requestBody: GetRichListRequest = {
            action: 'getRichList'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetRichListResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getVipSetting = async (): Promise<GetVipSettingResponse | null> => {
    try {
        const requestBody: GetVipSettingRequest = {
            action: 'getVip'
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetVipSettingResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
