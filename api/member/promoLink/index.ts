import axios from "axios";
import { yadogBackendUrl } from "@/constants";
import { GetPromoLinksRequest, GetPromoLinksResponse, CreatePromoLinkRequest, CreatePromoLinkResponse } from "@/types";

export const getPromoLinks = async (userid: string, token: string) : Promise<GetPromoLinksResponse | null> => {
    try {
        const requestBody: GetPromoLinksRequest = {
            action: 'PromoLink',
            userid: userid,
            token: token
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetPromoLinksResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const createPromoLink = async (userid: string, token: string, PL_rebate: string, PL_isproxy: string, PL_remark: string, PL_note: string, PL_notOpenDown: string, PL_status: string, PL_host: string) : Promise<CreatePromoLinkResponse | null> => {
    try {
        const requestBody: CreatePromoLinkRequest = {
            action: 'PromoLink',
            userid: userid,
            token: token,
            PL_rebate: PL_rebate,
            PL_isproxy: PL_isproxy,
            PL_remark: PL_remark,
            PL_note: PL_note,
            PL_notOpenDown: PL_notOpenDown,
            PL_status: PL_status,
            PL_host: PL_host
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as CreatePromoLinkResponse;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}