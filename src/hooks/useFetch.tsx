import { useState } from 'react';

export default function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendReq = async (url: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Could not fetch.');
      const respData = await response.json();
      setLoading(false);
      return respData;
    } catch (err) {
      setError('Something went wrong: ' + err);
    }
    setLoading(false);
  };
  return { sendReq, loading, error };
}
