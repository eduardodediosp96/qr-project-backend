import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const options = {
  url: `${process.env.SUNAI_BACKOFFICE_API}/inversors`,
  method: "GET",
};

export const createInversorsBulkBO = async (data) => {
  const { url } = options;
  return axios({ ...options, url: url + "/bulk", method: "POST", data });
};
