import { useEffect, useState } from "react";

type UseFetchTypes = {
  fetch: (loading: React.Dispatch<React.SetStateAction<boolean>>) => void;
};

function useFetch({ fetch }: UseFetchTypes) {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    fetch(setLoading);
  }, [fetch]);

  return { loading };
}

export { useFetch };
