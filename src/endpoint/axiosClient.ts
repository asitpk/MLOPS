import axios from "axios";

const URL = process.env.baseURL;

let workHackURL = process.env.workHackURL;


export const post = async (apiURL: string, data: any, params?: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      params,
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const postform = async (apiURL: string, data: any, params?: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      params,
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const noAuthPost = async (apiURL: string, data: any) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};

export const postLogin = async (apiURL: string, data: any) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};

export const getAllCompanies = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const postResetPassword = async (apiURL: string, data: any) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};

export const get = async (apiURL: string, params?: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    params,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const noAuthGet = async (apiURL: string, params?: any) => {
  return axios.get(`${URL}/${apiURL}`);
};

export const put = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.put(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const patch = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.patch(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};


export const getAllDepartment = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const addDepartment = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const updateDepartment = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.patch(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const getAllDesignations = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const addDesignation = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const updateDesignation = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.patch(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const deleteDesignation = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const getAllLevel = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const addLevel = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const updateLevel = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.patch(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

// Survey Items
export const getAllCategory = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const addCategory = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const updateCategory = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.patch(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const getAllQuestion = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const addQuestion = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const getAllTag = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const addTag = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const updateTag = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.patch(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const getAllCandidateGroup = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const addCandidateGroup = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");

  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const updateCandidateGroup = async (apiURL: string, data: any) => {
  let token = localStorage.getItem("redloftoken");
  return axios.patch(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: token,
    },
  });
};

export const getAllCandidateGroupMember = async (apiURL: string) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const initiateWhatsAppConversation = async (apiURL: string, data:any, token? : any) => {
 
  return axios.post(`${workHackURL}/${apiURL}`, data,{
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
}
