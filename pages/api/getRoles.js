import axios from 'axios';

export default async function handler(req, res) {
  const config = {
    method: 'get',
    url: 'https://dev-vynonl5ezifth2mh.us.auth0.com/api/v2/roles/rol_8OvGC57Ir1jJMYq8/users',
    headers: {
  'Authorization': `Bearer ${process.env.AUTH0_MANAGEMENT_API_TOKEN}`
    }
  };

  try {
    const response = await axios.request(config);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching allowed users:', error);
    res.status(500).json({ error: 'Error fetching allowed users' });
  }
}
