import axios from "axios";
import { yadogBackendUrl } from "@/constants";
import { GetProcessedTransferRecordsRequest, GetProcessedTransferRecordsResponse, GetUnprocessedTransferRecordsRequest, GetUnprocessedTransferRecordsResponse,
    GetTransferAmountsRequest, GetTransferAmountsResponse, TransferToRequest, TransferToResponse, AgreedTransferRecordRequest, AgreedTransferRecordResponse,
    RefusedTransferRecordRequest, RefusedTransferRecordResponse, GetFreezeRecordsRequest, GetFreezeRecordsResponse
 } from "@/types";

export const getProcessedTransferRecords = async (userid: string, token: string, start: string, end: string, page: number, perPage: number) : Promise<GetProcessedTransferRecordsResponse | null> => {
  try {
    const requestBody: GetProcessedTransferRecordsRequest = {
      action: 'getProcessedTransferRecords',
      userid: userid,
      token: token,
      start: start,
      end: end,
      page: page,
      perPage: perPage
    }
    const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
    if (response.status === 200) {
      return response.data as GetProcessedTransferRecordsResponse;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUnprocessedTransferRecords = async (userid: string, token: string) : Promise<GetUnprocessedTransferRecordsResponse | null> => {
  try {
    const requestBody: GetUnprocessedTransferRecordsRequest = {
      action: 'getUnprocessedTransferRecords',
      userid: userid,
      token: token
    }
    const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
    if (response.status === 200) {
      return response.data as GetUnprocessedTransferRecordsResponse;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getTransferAmounts = async (userid: string, token: string) : Promise<GetTransferAmountsResponse | null> => {
  try {
    const requestBody: GetTransferAmountsRequest = {
      action: 'getTransferAmounts',
      userid: userid,
      token: token
    }
    const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
    if (response.status === 200) {
      return response.data as GetTransferAmountsResponse;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const transferTo = async (userid: string, token: string, nickname: string, amount: number, code: string) : Promise<TransferToResponse | null> => {
  try {
    const requestBody: TransferToRequest = {
      action: 'transferTo',
      userid: userid,
      token: token,
      nickname: nickname,
      amount: amount,
      code: code
    }
    const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
    if (response.status === 200) {
      return response.data as TransferToResponse;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export const agreedTransferRecord = async (userid: string, token: string, id: number) : Promise<AgreedTransferRecordResponse | null> => {
  try {
    const requestBody: AgreedTransferRecordRequest = {
      action: 'agreedTransferRecord',
      userid: userid,
      token: token,
      id: id
    }
    const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
    if (response.status === 200) {
      return response.data as AgreedTransferRecordResponse;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const refusedTransferRecord = async (userid: string, token: string, id: number) : Promise<RefusedTransferRecordResponse | null> => {
  try {
    const requestBody: RefusedTransferRecordRequest = {
      action: 'refusedTransferRecord',
      userid: userid,
      token: token,
      id: id
    }
    const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
    if (response.status === 200) {
      return response.data as RefusedTransferRecordResponse;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getFreezeRecords = async (userid: string, token: string) : Promise<GetFreezeRecordsResponse | null> => {
  try {
    const requestBody: GetFreezeRecordsRequest = {
      action: 'getFreezeRecords',
      userid: userid,
      token: token
    }
    const response = await axios.post(`${yadogBackendUrl}/api/mainApi`, requestBody);
    if (response.status === 200) {
      return response.data as GetFreezeRecordsResponse;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
