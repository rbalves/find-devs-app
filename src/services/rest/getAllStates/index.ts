import api from "../api";

const getAllStates = async () => {
  try {
    const { data } = await api.get("/state");
    return data;
  } catch {
    return [];
  }
};

export default getAllStates;
