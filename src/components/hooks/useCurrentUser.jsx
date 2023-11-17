import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCurrentUser() {
  const [user, setUser] = useState(null);
  const BASE_PATH = 'http://localhost:3000';

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${BASE_PATH}/current-user`);
      setUser(response.data);
    })();
  }, []);

  return user;
}
