// pages/api/events.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('http://wihomewinemakers.org/wp-json/wp/v2/event');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
