import {useQuery} from '@shopify/hydrogen';

const SPACE_ID = '17iy4f89iof1';
const ACCESS_TOKEN = '7i731nz096ILdYN3a1CPgSm2zS2b7Oz99jDmxHX_fQg';
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

export const useContentfulQuery = ({query, variables, key = []}) => {
  const {data} = useQuery(key, async () => {
    const response = await fetch(CONTENTFUL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    return response.json();
  });

  return data;
};
