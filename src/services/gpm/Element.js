import axios from "axios";
const options = {
  url: `${process.env.GPM_API}/api/Plant`,
  method: "GET",
};

export const getLastDataFromElements = async (token, plantId, elementId) => {
  return axios({
    ...options,
    url: `${options.url}/${plantId}/Element/${elementId}/LastData`,
    headers: {
      Authorization: token,
      elementId,
      plantId,
    },
  });
};
