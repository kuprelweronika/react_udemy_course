import { useState, useCallback } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        //zamiast tego kodu daję parametr
        //const loadedTasks = [];
        //for (const taskKey in data) {
        //loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        // }
        //setTasks(loadedTasks);
        //i daje nowa funkcje
        applyData(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [applyData]
  );
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
