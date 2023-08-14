import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const options = {
  url: `${process.env.SUNAI_BACKOFFICE_API}/tokens-gpm`,
  method: "GET",
};

const getTokensFromSunaiBO = async () => axios({ ...options });

const getTokenFromSunaiBO = async (id) => {
  const { url } = options;
  return axios({ ...options, url: `${url}/${id}` });
};

const createTokenFromSunaiBO = async (data) =>
  axios({ ...options, method: "POST", data });

export { getTokensFromSunaiBO, getTokenFromSunaiBO, createTokenFromSunaiBO };
