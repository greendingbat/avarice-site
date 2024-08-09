import axios from "axios";
import { ENDPOINT } from "./consts";


const client = axios.create({
  baseURL: ENDPOINT,
});

export async function getMessage() {
  const response = await client.get('/message');
  return response.data.message;
}
