import axios from "axios";
const options = {
  url: `${process.env.GPM_API}/api/Plant`,
  method: "GET",
};

const getPlantsFromToken = async (token) => {
  return axios({
    ...options,
    headers: {
      Authorization: token,
    },
  });
};

const getElementsFromPlantId = async (token, plantId) => {
  return axios({
    ...options,
    url: `${options.url}/${plantId}/Element`,
    headers: {
      Authorization: token,
      plantId,
    },
  });
};

export { getPlantsFromToken, getElementsFromPlantId };
