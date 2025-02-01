import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          if (!options.url.includes('/keyword/') || !options.url.split('/keyword/')[1]) return; 
      
          setLoading(true);
          try {
            const response = await axios.request(options);
            setData(response.data);
          } catch (error) {
            setError("Movie is not found");
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, [options.url]);
      

    return {data,loading,error};
    
}

export default useFetch;


