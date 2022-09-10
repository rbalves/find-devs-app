import api from "../api";

const getAllDevelopers = async () => {
  try {
    const { data } = await api.get("/devs");
    return data;
  } catch {
    return [];
  }
};

export default getAllDevelopers;
