// pages/api/media.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://kaileehamre.com/wp-json/wp/v2/media?per_page=100&page=1');
    const mediaItems = response.data;
    console.log(response.data)

    const categorizedMedia = mediaItems.reduce((acc, item) => {
      const folderName = item.rml_folder_info?.name || 'Uncategorized';
      if (!acc[folderName]) {
        acc[folderName] = [];
      }
      acc[folderName].push(item);
      return acc;
    }, {});

    res.status(200).json(categorizedMedia);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch data' });
  }
}
