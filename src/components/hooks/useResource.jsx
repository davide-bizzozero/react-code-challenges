import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useResoucer(resourceUrl) {
  const [resource, setResource] = useState(null);
  const BASE_PATH = 'http://localhost:3000';

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${BASE_PATH}/${resourceUrl}`);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
}
