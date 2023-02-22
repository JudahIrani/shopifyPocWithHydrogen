import {useQuery} from '@shopify/hydrogen';

const SPACE_ID = '0j62opvgstnf';
const ACCESS_TOKEN = 'iQu3gge6MzjVpJxZ8RiI1CacUTgEh3XS7YNN7OuKteo';
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
