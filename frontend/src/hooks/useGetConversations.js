

import { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false); i
  const [conversations, setConversations] = useState([]); 

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users"); 
        if (!res.ok) {
          throw new Error('Failed to fetch conversations');
        }
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error); 
        }
        setConversations(data); 
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations(); 
  }, []);

  return { loading, conversations };
}

export default useGetConversations;
