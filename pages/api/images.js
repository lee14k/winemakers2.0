import axios from 'axios';

async function fetchAndCategorizeMedia(perPage, currentPage, categorizedMedia = {}) {
  try {
    const response = await axios.get('http://wihomewinemakers.org/wp-json/wp/v2/media', {
      params: {
        per_page: perPage,
        page: currentPage,
      }
    });
    const mediaItems = response.data;
    console.log(mediaItems)

    mediaItems.forEach(item => {
      const folderName = item.rml_folder_info?.name || 'Uncategorized';
      if (folderName !== '/Unorganized') {
        if (!categorizedMedia[folderName]) {
          categorizedMedia[folderName] = [];
        }
        console.log(categorizedMedia)
        categorizedMedia[folderName].push(item);
      }
    });

    // Check if there are more items to fetch
    if (mediaItems.length === perPage) {
      console.log('here')
      return fetchAndCategorizeMedia(perPage, currentPage + 1, categorizedMedia);
    } else {
      // No more items to fetch, return the result
      return categorizedMedia;
    }
  } catch (error) {
    throw new Error(`Failed to fetch media items: ${error.message}`);
  }
}

export default async function handler(req, res) {
  try {
    const perPage = 100; // Number of items per page
    const currentPage = 1; // Start from the first page

    const categorizedMedia = await fetchAndCategorizeMedia(perPage, currentPage);

    res.status(200).json(categorizedMedia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
