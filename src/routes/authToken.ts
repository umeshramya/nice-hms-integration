import axios from "axios";

export interface AUTH_TOKEN {
  token: string;
}

export const authToken = async (
  clientId: string,
  clientSecrete: string,
  url: string
): Promise<AUTH_TOKEN> => {
  const res = await axios
    .post(url, {
      email: clientId,
      password: clientSecrete,
    })
    .then((res) => res.data);

  return res;
};
