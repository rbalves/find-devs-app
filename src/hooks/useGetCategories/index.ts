import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllCategories from "../../services/rest/getAllCategories";

import {
  setCategories,
  getCategories,
} from "../../store/modules/categories/reducer";

const useGetCategories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);

        const data = await getAllCategories();

        dispatch(setCategories(data));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const categories = useSelector(getCategories);

  return { categories, loading, error };
};

export default useGetCategories;
