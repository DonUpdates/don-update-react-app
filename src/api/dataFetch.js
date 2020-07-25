import axios from 'axios';
  
  axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: "bdfdca9e46651b40dc4e1f70251c533e01d5018b",
      apikey: "NCMQHZCXPIUSZMOO0JBLNYG7RCVUH4J6",
  }
  
  const baseUrl = 'https://donupdates.in/api/news-index.php';
  
  export default (pageNo, categoryId = 1) => 
        axios.get(baseUrl + `?category_id=${categoryId}&per_page=10&page=${pageNo}`);
