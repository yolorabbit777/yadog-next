import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { GetBNGDemoUrlRequest, GetBNGDemoUrlResponse, GetBNGGameUrlRequest, GetBNGGameUrlResponse } from '@/types';

export const getBNGDemoUrl = async (game_type: string, skey: string, gameId: number): Promise<GetBNGDemoUrlResponse | null> => {
    try {
        const requestBody: GetBNGDemoUrlRequest = {
            action: 'FreeGame',
            game_type: game_type,
            skey: skey,
            gameId: gameId
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetBNGDemoUrlResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getBNGGameUrl = async (userid: number, token: string, gameId: number, game_type: string): Promise<GetBNGGameUrlResponse | null> => {
    try {
        const requestBody: GetBNGGameUrlRequest = {
            action: 'getGameLoginURL',
            userid: userid,
            token: token,
            skey: 'bng',
            gameId: gameId,
            game_type: game_type
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetBNGGameUrlResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}