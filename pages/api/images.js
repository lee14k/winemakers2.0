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
//bug where even tho we asked for 100, it tried to give me 100 - queried 100 but something happened with 2 of them??
    //
    mediaItems.forEach(item => {
      const folderName = item.rml_folder_info?.name || 'Uncategorized';
      if (folderName !== '/Unorganized') {
        if (!categorizedMedia[folderName]) {
          categorizedMedia[folderName] = [];
        }
       // console.log(categorizedMedia.length)
        categorizedMedia[folderName].push(item);
      }
    });

    // Check if there are more items to fetch
    if (mediaItems.length === 0) {
      // No more items to fetch, return the result
      return categorizedMedia;
    } else {
      return fetchAndCategorizeMedia(perPage, currentPage + 1, categorizedMedia);
    }
  } catch (error) {
    return categorizedMedia;
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
