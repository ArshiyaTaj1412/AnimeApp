import axios from 'axios';

const TOKEN_URL = 'https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken';
const CONTENT_URL = 'https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/getContent';

const email = 'arshiyataj1412@gmail.com';

export async function fetchTokenAndContent() {
  try {
    console.log('Requesting token from:', TOKEN_URL, 'with email:', email);

    const tokenResponse = await axios.post(TOKEN_URL, { email });

    const token = tokenResponse.data.token;
    console.log('Token received:', token);

    console.log('Fetching content with token...');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log('Authorization Header:', headers.Authorization);

    const contentResponse = await axios.get(CONTENT_URL, { headers });

    console.log('Content fetched successfully:', contentResponse.data);
    return contentResponse.data;

  } catch (error: any) {
    console.error('Error fetching token or content:', error);

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
      console.error('Headers:', JSON.stringify(error.response.headers, null, 2));
    } else {
      console.error('Error message:', error.message);
    }

    return null;
  }
}
