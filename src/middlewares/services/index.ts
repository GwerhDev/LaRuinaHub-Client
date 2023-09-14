import axios from "axios"
import { API_URL } from "../misc/const"
import { error } from "../misc/errors";

export const signupGoogle: any = async (form: any) => {
  const response: any = await axios.post(API_URL + "/signup-google", form)
                                   .then(response => response.data.token)
                                   .catch(() => { return { error: error.api.loadAllItems } });
  return response;
}

export const signupInner: any = async (form: any) => {
  const response: any = await axios.post(API_URL + "/signup-inner", form)
                                   .then(response => response.data.token)
                                   .catch(() => { return { error: error.api.loadItemById } });
  return response;
}

export const getUserData: any = async (token: string) => {
  const response: any = await axios.get(API_URL + "/auth", { headers: { Authorization: token }})
                                   .then(response => response.data)
                                   .catch(() => { return { error: error.api.loadItemById } });
  return response;
}