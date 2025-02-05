import axios from "axios";
import { yadogBackendUrl } from "@/constants";
import { GetFriendListRequest, GetFriendListResponse, RelieveBlockFriendByIdRequest, RelieveBlockFriendByIdResponse, DeleteFriendRequest, DeleteFriendResponse,
    BlockFriendByIdRequest, BlockFriendByIdResponse, AddFriendRequest, AddFriendResponse, RefuseFriendRequestRequest, RefuseFriendRequestResponse,
    AgreeFriendRequestRequest, AgreeFriendRequestResponse, SearchFriendRequest, SearchFriendResponse, GetBeInvitedFriendListRequest, GetBeInvitedFriendListResponse
 } from "@/types";

export const getFriendList = async (userid: string, token: string, friendType: number) : Promise<GetFriendListResponse | null> => {
    try {
        const requestBody: GetFriendListRequest = {
            action: 'getFriendList',
            userid: userid,
            token: token,
            friendType: friendType
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetFriendListResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const getBlockFriendList = async (userid: string, token: string) : Promise<GetFriendListResponse | null> => {
    return await getFriendList(userid, token, 4);
}

export const relieveBlockFriendById = async (userid: string, token: string, uf_id: string) : Promise<RelieveBlockFriendByIdResponse | null> => {
    try {
        const requestBody: RelieveBlockFriendByIdRequest = {
            action: 'relieveBlockFriendById',
            userid: userid,
            token: token,
            uf_id: uf_id
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as RelieveBlockFriendByIdResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteFriend = async (userid: string, token: string, uf_id: string) : Promise<DeleteFriendResponse | null> => {
    try {
        const requestBody: DeleteFriendRequest = {
            action: 'deleteFriend',
            userid: userid,
            token: token,
            uf_id: uf_id
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as DeleteFriendResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;    
    }
}

export const blockFriendById = async (userid: string, token: string, uf_id: string, blockUserId: number) : Promise<BlockFriendByIdResponse | null> => {
    try {
        const requestBody: BlockFriendByIdRequest = {
            action: 'blockFriendById',
            userid: userid,
            token: token,
            uf_id: uf_id,
            blockUserId: blockUserId
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as BlockFriendByIdResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const addFriend = async (userid: string, token: string, nickname: string) : Promise<AddFriendResponse | null> => {
    try {
        const requestBody: AddFriendRequest = {
            action: 'addFriend',
            userid: userid,
            token: token,
            nickname: nickname
        }   
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as AddFriendResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const refuseFriendRequest = async (userid: string, token: string, uf_id: string) : Promise<RefuseFriendRequestResponse | null> => {
    try {
        const requestBody: RefuseFriendRequestRequest = {
            action: 'refuseFriendRequest',
            userid: userid,
            token: token,
            uf_id: uf_id
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as RefuseFriendRequestResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const agreeFriendRequest = async (userid: string, token: string, uf_id: string) : Promise<AgreeFriendRequestResponse | null> => {
    try {
        const requestBody: AgreeFriendRequestRequest = {
            action: 'agreeFriendRequest',
            userid: userid,
            token: token,
            uf_id: uf_id
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as AgreeFriendRequestResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const searchFriend = async (userid: string, token: string, nickname: string) : Promise<SearchFriendResponse | null> => {
    try {
        const requestBody: SearchFriendRequest = {
            action: 'searchFriend',
            userid: userid,
            token: token,
            nickname: nickname
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as SearchFriendResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const getBeInvitedFriendList = async (userid: string, token: string) : Promise<GetBeInvitedFriendListResponse | null> => {
    try {
        const requestBody: GetBeInvitedFriendListRequest = {
            action: 'getBeInvitedFriendList',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetBeInvitedFriendListResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
