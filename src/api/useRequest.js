import axios from 'axios';
import useSWR from 'swr';

const config = {
  headers: {
    Authorization: "bdfdca9e46651b40dc4e1f70251c533e01d5018b",
    apikey: "NCMQHZCXPIUSZMOO0JBLNYG7RCVUH4J6",
    mode: 'no-cors',
  },
};

axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: "bdfdca9e46651b40dc4e1f70251c533e01d5018b",
    apikey: "NCMQHZCXPIUSZMOO0JBLNYG7RCVUH4J6",
}

const fetcher = url => axios.get(url).then(res => res.data);

const baseUrl = 'https://donupdates.in/api/news-index.php';

export default (pageNo, itemPerPage) => {
  if (!pageNo) {
    throw new Error('Page number is required');
  }

  if(!itemPerPage){
      itemPerPage = 10;
  }
  return useSWR(baseUrl + `?category_id=1&per_page=${itemPerPage}&page=${pageNo}`, fetcher);
};
