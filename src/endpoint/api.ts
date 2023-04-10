import Axios from "axios";
let urls = {
  test: `https://candidateapi.personifwy.com`,
};
const api = Axios.create({
  baseURL: `https://candidateapi.personifwy.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
