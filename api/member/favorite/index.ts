import axios from "axios";
import { yadogBackendUrl } from "@/constants";
import { AddFavoriteRequest, AddFavoriteResponse, RemoveFavoritesRequest, RemoveFavoritesResponse, GameListRequest, GameListResponse } from "@/types";

export const addFavorite = async (userid: string, token: string, gkid: number) : Promise<AddFavoriteResponse | null> => {
    try {
        const requestBody: AddFavoriteRequest = {
            action: 'add_favorites',
            userid: userid,
            token: token,
            gkid: gkid
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as AddFavoriteResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const removeFavorites = async (userid: string, token: string, gkid: number) : Promise<RemoveFavoritesResponse | null> => {
    try {
        const requestBody: RemoveFavoritesRequest = {
            action: 'remove_favorites',
            userid: userid,
            token: token,
            gkid: gkid
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as RemoveFavoritesResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const gameList = async (userid: string, token: string) : Promise<GameListResponse | null> => {
    try {
        const requestBody: GameListRequest = {
            action: 'gameList',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GameListResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
