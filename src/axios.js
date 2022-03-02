import axios from 'axios';
import config from './config';

export default axios.create({
  baseURL: config.baseURL,
  // baseURL: `https://api.postbird.com.ng/api/`, 
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
  }
});  