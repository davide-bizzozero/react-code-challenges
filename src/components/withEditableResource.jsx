/* eslint-disable react/display-name */
import axios from 'axios';
import { useEffect, useState } from 'react';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);
    const BASE_PATH = 'http://localhost:3000';

    useEffect(() => {
      (async () => {
        const response = await axios.get(`${BASE_PATH}${resourcePath}`);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(`${BASE_PATH}${resourcePath}`, {
        [resourceName]: data,
      });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return (
      <Component
        {...props}
        {...resourceProps}
      />
    );
  };
};
