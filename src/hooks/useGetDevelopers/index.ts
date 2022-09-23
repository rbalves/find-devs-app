import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllDevelopers from "../../services/rest/getAllDevelopers";
import {
  getDevelopers,
  setDevelopers,
} from "../../store/modules/developers/reducer";

const useGetDevelopers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        setLoading(true);

        const data = await getAllDevelopers();

        dispatch(setDevelopers(data));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  const developers = useSelector(getDevelopers);

  return { developers, loading, error };
};

export default useGetDevelopers;
