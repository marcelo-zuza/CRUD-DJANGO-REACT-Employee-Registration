import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const API_URL = 'http://127.0.0.1:8000/api1/employee/';



const getAllData = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

const addData = async (newData) => {
  const response = await axios.post(`${API_URL}`, newData);
  return response.data;
};

const updateData = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

const deleteData = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export { getAllData, addData, updateData, deleteData };
