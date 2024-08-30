import { createClient } from 'contentful';

const client = createClient({
  space: 'xpckm8g47k10', // Înlocuiește cu ID-ul tău de spațiu Contentful
  accessToken: 'jCvBFbNBstia0e9P_WZjKS7ttNvEXbA3Cw3TbruN6UY' // Înlocuiește cu token-ul tău de acces Contentful
});

export default client;
