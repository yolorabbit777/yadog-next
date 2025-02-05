import axios from 'axios';
import { yadogBackendUrl } from '@/constants';
import { GetFamilyListResponse, GetFamilyRankResponse, GetDefaultSettingResponse, CreateFamilyRequest, CreateFamilyResponse, GetDeprecatedFamilyUserListResponse,
    GetMyFamilyResponse, UpdateFamilyRequest, UpdateFamilyResponse, UpgradeFamilyResponse, ApplyFamilyRequest, ApplyFamilyResponse, CancelApplyFamilyResponse,
    RejectInviteFamilyResponse, InviteFamilyRequest, InviteFamilyResponse, UpdateRoleRequest, UpdateRoleResponse, KickUserRequest, KickUserResponse,
    AllowJoinRequest, AllowJoinResponse, CancelInviteRequest, CancelInviteResponse, RewardRequest, RewardResponse, RejectApplyRequest, RejectApplyResponse,
    AcceptResponse, ContributeBalanceRequest, ContributeBalanceResponse, ContributeScoreRequest, ContributeScoreResponse
 } from '@/types';

export const getFamilyList = async (): Promise<GetFamilyListResponse | null> => {
    try {
        const response = await axios.get(`${yadogBackendUrl}/api/family/list`);
        if (response.status === 200) {
            return response.data as GetFamilyListResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;    
    }
}

export const getFamilyRank = async (): Promise<GetFamilyRankResponse | null> => {
    try {
        const response = await axios.get(`${yadogBackendUrl}/api/family/rank`);
        if (response.status === 200) {
            return response.data as GetFamilyRankResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getDefaultSetting = async (): Promise<GetDefaultSettingResponse | null> => {
    try {
        const response = await axios.get(`${yadogBackendUrl}/api/family/setting`);
        if (response.status === 200) {
            return response.data as GetDefaultSettingResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const createFamily = async (title: string): Promise<CreateFamilyResponse | null> => {
    try {
        const requestBody: CreateFamilyRequest = {
            title: title
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/create`, requestBody);
        if (response.status === 200) {
            return response.data as CreateFamilyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getDeprecatedFamilyUserList = async (): Promise<GetDeprecatedFamilyUserListResponse | null> => {
    try {
        const response = await axios.get(`${yadogBackendUrl}/api/family/user/list`);
        if (response.status === 200) {
            return response.data as GetDeprecatedFamilyUserListResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getMyFamily = async (): Promise<GetMyFamilyResponse | null> => {
    try {
        const response = await axios.get(`${yadogBackendUrl}/api/family/my`);
        if (response.status === 200) {
            return response.data as GetMyFamilyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const updateFamily = async (title: string, description: string): Promise<UpdateFamilyResponse | null> => {
    try {
        const requestBody: UpdateFamilyRequest = {
            title: title,
            description: description
        }
        const response = await axios.patch(`${yadogBackendUrl}/api/family/update`, requestBody);
        if (response.status === 200) {
            return response.data as UpdateFamilyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const upgradeFamily = async (): Promise<UpgradeFamilyResponse | null> => {
    try {
        const response = await axios.patch(`${yadogBackendUrl}/api/family/upgrade`);
        if (response.status === 200) {
            return response.data as UpgradeFamilyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const applyFamily = async (userid: string, token: string): Promise<ApplyFamilyResponse | null> => {
    try {
        const requestBody: ApplyFamilyRequest = {
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/apply/1`, requestBody);
        if (response.status === 200) {
            return response.data as ApplyFamilyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const cancelApplyFamily = async (): Promise<CancelApplyFamilyResponse | null> => {
    try {
        const response = await axios.delete(`${yadogBackendUrl}/api/family/cancelApply`);
        if (response.status === 200) {
            return response.data as CancelApplyFamilyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const rejectInviteFamily = async (): Promise<RejectInviteFamilyResponse | null> => {
    try {
        const response = await axios.delete(`${yadogBackendUrl}/api/family/rejectInvite`);
        if (response.status === 200) {
            return response.data as RejectInviteFamilyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const inviteFamily = async (inviteNickname: string): Promise<InviteFamilyResponse | null> => {
    try {
        const requestBody: InviteFamilyRequest = {
            inviteNickname: inviteNickname
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/invite`, requestBody);
        if (response.status === 200) {
            return response.data as InviteFamilyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const updateRole = async (adjustUserId: number, role: string): Promise<UpdateRoleResponse | null> => {
    try {
        const requestBody: UpdateRoleRequest = {
            adjustUserId: adjustUserId,
            role: role
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/update/role`, requestBody);
        if (response.status === 200) {
            return response.data as UpdateRoleResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const kickUser = async (kickUserId: number): Promise<KickUserResponse | null> => {
    try {
        const requestBody: KickUserRequest = {
            kickUserId: kickUserId
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/kick`, requestBody);
        if (response.status === 200) {
            return response.data as KickUserResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const allowJoin = async (allowUserId: number): Promise<AllowJoinResponse | null> => {
    try {
        const requestBody: AllowJoinRequest = {
            allowUserId: allowUserId
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/allow`, requestBody);
        if (response.status === 200) {
            return response.data as AllowJoinResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const cancelInvite = async (cancelUserId: number): Promise<CancelInviteResponse | null> => {
    try {
        const requestBody: CancelInviteRequest = {
            cancelUserId: cancelUserId
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/cancelInvite`, requestBody);
        if (response.status === 200) {
            return response.data as CancelInviteResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const reward = async (rewardList: RewardRequest): Promise<RewardResponse | null> => {
    try {
        const response = await axios.post(`${yadogBackendUrl}/api/family/reward`, rewardList);
        if (response.status === 200) {
            return response.data as RewardResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const rejectApply = async (rejectUserId: number): Promise<RejectApplyResponse | null> => {
    try {
        const requestBody: RejectApplyRequest = {
            rejectUserId: rejectUserId
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/rejectApply`, requestBody);
        if (response.status === 200) {
            return response.data as RejectApplyResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const accept = async (): Promise<AcceptResponse | null> => {
    try {
        const response = await axios.post(`${yadogBackendUrl}/api/family/accept`);
        if (response.status === 200) {
            return response.data as AcceptResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const contributeBalance = async (amount: number): Promise<ContributeBalanceResponse | null> => {
    try {
        const requestBody: ContributeBalanceRequest = {
            amount: amount
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/contribute/balance`, requestBody);
        if (response.status === 200) {
            return response.data as ContributeBalanceResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const contributeScore = async (amount: number): Promise<ContributeScoreResponse | null> => {
    try {
        const requestBody: ContributeScoreRequest = {
            amount: amount
        }
        const response = await axios.post(`${yadogBackendUrl}/api/family/contribute/score`, requestBody);
        if (response.status === 200) {
            return response.data as ContributeScoreResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}   
