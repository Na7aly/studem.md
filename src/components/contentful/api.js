import client from '../contentful/contentfulClient';

export const fetchArticles = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'studemArticle', // ID-ul tipului de conținut
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
