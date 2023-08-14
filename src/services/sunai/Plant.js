import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const options = {
  url: `${process.env.SUNAI_BACKOFFICE_API}/plants`,
  method: "GET",
};

const getPlantsBO = async () => axios({ ...options });

const getPlantBO = async (id) => {
  const { url } = options;
  return axios({ ...options, url: `${url}/${id}` });
};

const createPlantsBulkBO = async (data) => {
  const { url } = options;
  return axios({ ...options, url: url + "/bulk", method: "POST", data });
};

export { getPlantsBO, getPlantBO, createPlantsBulkBO };
