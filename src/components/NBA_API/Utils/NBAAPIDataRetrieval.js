import axios from "axios";

// API documentation found here:
// https://www.balldontlie.io/home.html#get-all-players
export const searchNBAPlayers = (
  // leave a blank string to not include parameter
  playerName = "",
  pageNumber = "",
  itemsPerPage = ""
) => {
  let API_ENDPOINT = "https://www.balldontlie.io/api/v1/players";

  let params = [];

  // check if the parameter is given, if so, add it to the endpoint
  if (playerName) params.push(`search=${playerName}`);
  if (pageNumber) params.push(`page=${pageNumber}`);
  if (itemsPerPage) params.push(`per_page=${itemsPerPage}`);

  params = "?" + params.join("&");

  return axios.get(`${API_ENDPOINT}${params}`);
};