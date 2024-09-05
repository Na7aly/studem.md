// import client from '../contentful/contentfulClient';

// export const fetchArticles = async () => {
//   try {
//     const response = await client.getEntries({
//       content_type: 'studemArticle', // ID-ul tipului de conținut
//     });
//     return response.items;
//   } catch (error) {
//     console.error('Error fetching articles:', error);
//     throw error;
//   }
// };
   

import  client  from './contentfulClient';

export const fetchArticles = async () => {
  const entries = await client.getEntries({
    content_type: 'studemArticle', // Replace with your content type ID
  });
  return entries.items;
};

export const fetchArticleById = async (id) => {
  const entry = await client.getEntry(id);
  return entry;
};
