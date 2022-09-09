import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllStacks from "../../services/rest/getAllStacks";

import { setStacks, getStacks } from "../../store/modules/stacks/reducer";

const useGetStacks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getStacks = async () => {
      try {
        setLoading(true);

        const data = await getAllStacks();

        dispatch(setStacks(data));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getStacks();
  }, []);

  const stacks = useSelector(getStacks);

  return { stacks, loading, error };
};

export default useGetStacks;
