import request from "request";
import axios from "axios";
const options = {
  url: `${process.env.GPM_API}/api/Account/Token`,
  method: "POST",
};
const getTokenfromGPM = async (data) => axios({ ...options, data });
export { getTokenfromGPM };
