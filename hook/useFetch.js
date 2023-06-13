import {useState, useEffect} from 'react';
import axios from 'axios';
import {jobsSlice} from '../components/store/jobsSlice';

const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/' + endPoint,
    headers: {
      'X-RapidAPI-Key': 'e772de9b23msh9bec34720338093p16c72cjsnb84c48280444',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // jobsSlice.actions.setJobs(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error, please try again later. Thank you!' + error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};

export default useFetch;
