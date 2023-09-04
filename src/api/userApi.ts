import axios from "axios";

export const getUserList = async (page = 1) => {
  try {
    const resApi = await axios.get(`https://reqres.in/api/users?page=${page}`);

    if (resApi.status === 200) {
      return resApi.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserDetail = async (userId: number) => {
  try {
    const resApi = await axios.get(`https://reqres.in/api/users/${userId}`);
    if (resApi.status === 200) {
      return resApi.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
