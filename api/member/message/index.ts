import axios from "axios";
import { yadogBackendUrl } from "@/constants";
import { WriteMessageRequest, WriteMessageResponse, ReadMessageRequest, ReadMessageResponse, GetReceivedMessagesRequest, GetReceivedMessagesResponse,
    GetSentMessagesRequest, GetSentMessagesResponse, DeleteMessageRequest, DeleteMessageResponse
 } from "@/types";

export const writeMessage = async (userid: string, token: string, MgsTitle: string, NeiRong: string, Target: number, ShouXinRen: string, msg_reply: string) : Promise<WriteMessageResponse | null> => {
  try {
    const requestBody: WriteMessageRequest = {
      action: 'WriteMessage',
      userid: userid,
      token: token,
      MgsTitle: MgsTitle,
      NeiRong: NeiRong,
      Target: Target,
      ShouXinRen: ShouXinRen,
      msg_reply: msg_reply
    }
    const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
    if (response.status === 200) {
      return response.data as WriteMessageResponse;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const readMessage = async (userid: string, token: string, ZhanNeiXinid: number, FaXinRenId: number, ShouXinRenId: number) : Promise<ReadMessageResponse | null> => {
    try {
        const requestBody: ReadMessageRequest = {
            action: 'ReadMessage',
            userid: userid,
            token: token,
            ZhanNeiXinid: ZhanNeiXinid,
            FaXinRenId: FaXinRenId,
            ShouXinRenId: ShouXinRenId
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as ReadMessageResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getReceivedMessages = async (userid: string, token: string, MgsTitle: string, NeiRong: string, Target: number, ShouXinRen: string, msg_reply: string, ReadFlag: number) : Promise<GetReceivedMessagesResponse | null> => {
    try {
        const requestBody: GetReceivedMessagesRequest = {
            action: 'ReceivedMessage',
            userid: userid,
            token: token,
            MgsTitle: MgsTitle,
            NeiRong: NeiRong,
            Target: Target,
            ShouXinRen: ShouXinRen,
            msg_reply: msg_reply,
            ReadFlag: ReadFlag
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetReceivedMessagesResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getSentMessages = async (userid: string, token: string, MgsTitle: string, NeiRong: string, Target: number, ShouXinRen: string, msg_reply: string, PageSize: number, Page: number) : Promise<GetSentMessagesResponse | null> => {
    try {
        const requestBody: GetSentMessagesRequest = {
            action: 'SentMessage',
            userid: userid,
            token: token,
            MgsTitle: MgsTitle,
            NeiRong: NeiRong,
            Target: Target,
            ShouXinRen: ShouXinRen,
            msg_reply: msg_reply,
            PageSize: PageSize,
            Page: Page
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as GetSentMessagesResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteMessage = async (userid: string, token: string, ZhanNeiXinid: number) : Promise<DeleteMessageResponse | null> => {
    try {
        const requestBody: DeleteMessageRequest = {
            action: 'DeleteMessage',
            userid: userid,
            token: token,
            ZhanNeiXinid: ZhanNeiXinid
        }
        const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
        if (response.status === 200) {
            return response.data as DeleteMessageResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
