import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllStates from "../../services/rest/getAllStates";
import { getStates, setStates } from "../../store/modules/states/reducer";

const useGetStates = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getStates = async () => {
      try {
        setLoading(true);

        const data = await getAllStates();

        dispatch(setStates(data));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getStates();
  }, []);

  const states = useSelector(getStates);

  return { states, loading, error };
};

export default useGetStates;
