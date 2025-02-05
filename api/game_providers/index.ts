import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { PlayGameRequest, PlayGameResponse } from '@/types';

export const playGame = async (userid: number, token: string, skey: string, gameId: number, game_type: string): Promise<PlayGameResponse | null> => {
    try {
        const requestBody: PlayGameRequest = {
            action: 'getGameLoginURL',
            userid: userid,
            token: token,
            skey: skey,
            gameId: gameId,
            game_type: game_type
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as PlayGameResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}