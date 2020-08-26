import React, { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading };
};

const useLazyFetch = (url, options = {}) => {
  const [data, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const { onComplete = null, ...rest } = options;

  const fetchData = async () => {
    console.log(options);
    setLoading(true);
    try {
      const res = await fetch(url, {
        ...rest,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const json = await res.json();
      if (+res.status < 200 || +res.status >= 300) {
        setError(json);
        return;
      }
      setResponse(json);
      onComplete && onComplete(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, { data, error, loading }];
};

export { useFetch, useLazyFetch };
