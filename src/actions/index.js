import axios from 'axios';

const ROOT_URL = "https://talaikis.com/api/quotes/random/";

export const FETCH_QUOTE = "FETCH_QUOTE";

export function fetchQuote() {
  const url = ROOT_URL;
  const request = axios.get(url);
  
  return {
    type: FETCH_QUOTE,
    payload: request
  }
}