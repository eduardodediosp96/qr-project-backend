import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const options = {
  url: `${process.env.SUNAI_BACKOFFICE_API}/credentials-client`,
  method: "GET",
};

const getCredentialClients = async () => axios({ ...options });

const getCredentialClient = async (id) => {
  const { url } = options;
  return axios({ ...options, url: `${url}/${id}` });
};

const createCredentialClientBO = async (data) =>
  axios({ ...options, method: "POST", data });

export { getCredentialClients, getCredentialClient, createCredentialClientBO };
