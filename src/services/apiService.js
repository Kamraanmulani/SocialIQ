

import axios from 'axios';

// Load environment variables from the .env file
const BASE_API_URL = '/api'; // Use the proxy path
const LANGFLOW_ID = import.meta.env.VITE_LANGFLOW_ID;
const FLOW_ID = import.meta.env.VITE_FLOW_ID;
const APPLICATION_TOKEN = import.meta.env.VITE_APPLICATION_TOKEN;
const ENDPOINT = "admin";

console.log('BASE_API_URL:', BASE_API_URL);
console.log('LANGFLOW_ID:', LANGFLOW_ID);
console.log('FLOW_ID:', FLOW_ID);
console.log('APPLICATION_TOKEN:', APPLICATION_TOKEN);

export const runFlow = async (message) => {
  const api_url = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${ENDPOINT}`;
  console.log('API URL:', api_url);
  
  const payload = {
    input_value: message,
    output_type: "chat",
    input_type: "chat",
  };

  const headers = {
    Authorization: `Bearer ${APPLICATION_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(api_url, payload, { headers });
    return response.data;
  } catch (error) {
    console.error("Error running flow:", error);
    throw error;
  }
};