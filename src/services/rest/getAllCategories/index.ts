import api from "../api";

const getAllCategories = async () => {
  try {
    const { data } = await api.get("/category");
    return data;
  } catch {
    return [];
  }
};

export default getAllCategories;
