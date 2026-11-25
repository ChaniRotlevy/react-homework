import axios from 'axios';

const uri = 'https://dummyjson.com/users';

// GET - כל המשתמשים
export const getAllUsersAxios = async () => {
  const response = await axios.get(uri);
  return response.data;
};

// GET - משתמש לפי ID
export const getUserByIdAxios = async (id) => {
  const response = await axios.get(`${uri}/${id}`);
  return response.data;
};

// POST - הוספת משתמש
export const addUserAxios = async (userObj) => {
  const response = await axios.post(`${uri}/add`, userObj);
  return response.data;
};