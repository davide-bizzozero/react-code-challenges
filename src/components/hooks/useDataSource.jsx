import { useState, useEffect } from 'react';

export default function useDataSource(getResourceFunc) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      setResource(result);
    })();
  }, [getResourceFunc]);

  return resource;
}
