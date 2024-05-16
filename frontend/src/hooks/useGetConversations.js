// import { useState, useEffect } from "react"

// const useGetConversations = () => {
//     const { loading, setLoading} = useState(false);
//     const { conversations, setConversations} = useState([]);

//     useEffect(() => {
//         const getConversations = async () => {
//             setLoading(true);
//             try{
//                 const res = fetch("/api/users");
//                 const data = await res.json();
//                 if(data.error){
//                     throw new Error(data.error); 
//                 }

//             } catch(e){
//                 toast.error(e.message)

//             } finally{
//                 setLoading(false);
//             }
//         }
//     }, []);

//     return {loading, conversations};

// }

// export default useGetConversations

import { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false); // Correção aqui
  const [conversations, setConversations] = useState([]); // Correção aqui

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users"); // Adicionando await
        if (!res.ok) {
          throw new Error('Failed to fetch conversations');
        }
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error); 
        }
        setConversations(data); // Definindo as conversas
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations(); // Chamando a função
  }, []);

  return { loading, conversations };
}

export default useGetConversations;
