import axios from 'axios';

export default axios.create({
  // baseURL: `http://localhost:3001/api/v1`
  baseURL: `${window.location.protocol}//${window.location.host}/api/v1`
});