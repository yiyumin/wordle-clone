import { useState, useEffect } from 'react';

const useLocalStorage = <Type>(
  key: string,
  defaultValue: Type | (() => Type)
) => {
  const [value, setValue] = useState<Type>(
    defaultValue instanceof Function ? defaultValue() : defaultValue
  );

  useEffect(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) {
      setValue(JSON.parse(jsonValue));
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
