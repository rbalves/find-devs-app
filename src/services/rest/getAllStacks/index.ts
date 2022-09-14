import api from "../api";

const getAllStacks = async () => {
  try {
    const { data } = await api.get("/stacks");
    return data;
  } catch {
    return [];
  }
};

export default getAllStacks;
