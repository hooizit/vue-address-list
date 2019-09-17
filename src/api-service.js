import axios from "axios";
const apiBase = "http://localhost:3000";

export default {
  getAllCompanies() {
    return axios.get(`${apiBase}/companies`);
  },

  getCompany(id) {
    return axios.get(`${apiBase}/companies/${id}`);
  },

  async addCompany(data) {
    return await axios.post(`${apiBase}/companies`, {
      name: data.companyName,
      country: data.country,
      state: data.state,
      city: data.city,
      address: data.address
    });
  },

  updateCompany(id, data) {
    return axios.put(`${apiBase}/companies/${id}`, {
      name: data.name,
      country: data.country,
      state: data.state,
      city: data.city,
      address: data.address
    });
  },

  getLocality() {
    return axios.get(`${apiBase}/locality`);
  }
};
