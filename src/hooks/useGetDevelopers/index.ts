import { useQuery } from "@apollo/client";

import { DEVELOPERS_QUERY } from "../../services/queries";

const useGetDevelopers = () => {
  const { data, loading, error } = useQuery(DEVELOPERS_QUERY);

  return { data, loading, error };
};

export default useGetDevelopers;
