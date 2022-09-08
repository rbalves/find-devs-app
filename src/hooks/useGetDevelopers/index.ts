import { useQuery } from "@apollo/client";

import { DEVELOPERS_QUERY } from "../../services/graphql/queries";

const useGetDevelopers = () => {
  const { data, loading, error } = useQuery(DEVELOPERS_QUERY);

  return { data, loading, error };
};

export default useGetDevelopers;
