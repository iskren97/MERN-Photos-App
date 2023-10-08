import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (!url) return;

    setIsFetching(true);
    axios
      .get(url)
      .then(({ data }) => setData(data))
      .catch((error) => setError(error.response.data))
      .finally(() => setIsFetching(false));
  }, [url]);

  return { data, isFetching, error };
};

export default useFetchData;
