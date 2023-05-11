import axios from "axios";

export interface AUTH_TOKEN {
  token: string;
}

export const authToken = async (
  clientId: string,
  clientSecrete: string,
  baseUrl: string
): Promise<AUTH_TOKEN> => {
  const url = `${baseUrl}auth_token`;
  const res = await axios
    .post(url, {
      email: clientId,
      password: clientSecrete,
      returnSecureToken: true,
    })
    .then((res) => res.data);

  return res;
};
