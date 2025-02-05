import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { GetJackpotResponse, GetResultDetailRequest, GetResultDetailResponse, PlayGameResponse } from '@/types';
import { playGame } from '@/api/game_providers';

export const getJackpot = async (): Promise<GetJackpotResponse | null> => {
    try {
        const response = await axios.get(`${yadogBackendUrl}/api/crazygoldJackpot`);
        if (response.status === 200) {
            return response.data as GetJackpotResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getResultDetail = async (betResultId: number): Promise<GetResultDetailResponse | null> => {
    try {
        const requestBody: GetResultDetailRequest = {
            betResultId: betResultId
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetResultDetailResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const playGameCrazyGold = async (userid: number, token: string, gameid: number, game_type: string): Promise<PlayGameResponse | null> => {
    return await playGame(userid, token, 'crazygold', gameid, game_type);
}