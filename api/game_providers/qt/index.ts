import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { playGame } from '@/api/game_providers';
import { GetQTGameUrlRequest, GetQTGameUrlResponse } from '@/types';

export const getQTGameUrl = async (userid: number, token: string, gameid: number, game_type: string, type: string): Promise<GetQTGameUrlResponse | null> => {
    try {
        const requestBody: GetQTGameUrlRequest = {
            action: 'getGameLoginURL',
            userid: userid,
            token: token,
            skey: 'qt',
            gameid: gameid,
            game_type: game_type,
            type: type
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetQTGameUrlResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}