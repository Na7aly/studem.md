import { createClient } from 'contentful';

// Încarcă variabilele de mediu din .env

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});


export default client;
