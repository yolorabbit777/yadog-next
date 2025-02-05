import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { playGame } from '@/api/game_providers';
import { GetDSDemoUrlRequest, GetDSDemoUrlResponse, GetDSGameUrlRequest, GetDSGameUrlResponse, PlayGameResponse } from '@/types';

export const getDGDemoUrl = async (game_type: string, gameid: number): Promise<GetDSDemoUrlResponse | null> => {
    try {
        const requestBody: GetDSDemoUrlRequest = {
            action: 'FreeGame',
            game_type: game_type,
            skey: 'ds',
            gameid: gameid
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetDSDemoUrlResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getDGGameUrl = async (userid: number, token: string, gameid: number, game_type: string, type: string): Promise<GetDSGameUrlResponse | null> => {
    try {
        const requestBody: GetDSGameUrlRequest = {
            action: 'getGameLoginURL',
            userid: userid,
            token: token,
            skey: 'ds',
            gameid: gameid,
            game_type: game_type,
            type: type
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetDSGameUrlResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const playGameDS = async (userid: number, token: string, gameid: number, game_type: string): Promise<PlayGameResponse | null> => {
    return await playGame(userid, token, 'ds', gameid, game_type);
}
