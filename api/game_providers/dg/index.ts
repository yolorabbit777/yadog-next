import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { GetDGDemoUrlRequest, GetDGDemoUrlResponse, GetDGGameUrlRequest, GetDGGameUrlResponse } from '@/types';

export const getDGDemoUrl = async (game_type: string, skey: string): Promise<GetDGDemoUrlResponse | null> => {
    try {
        const requestBody: GetDGDemoUrlRequest = {
            action: 'FreeGame',
            game_type: game_type,
            skey: skey
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetDGDemoUrlResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getDGGameUrl = async (userid: number, token: string, gameid: number, game_type: string): Promise<GetDGGameUrlResponse | null> => {
    try {
        const requestBody: GetDGGameUrlRequest = {
            action: 'getGameLoginURL',
            userid: userid,
            token: token,
            skey: 'dg',
            gameid: gameid,
            game_type: game_type
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetDGGameUrlResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}