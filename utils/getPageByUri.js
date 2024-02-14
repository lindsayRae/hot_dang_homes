import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
export const getPageByUri = async (uri) => {
  const params = {
    query: `
    query PagesQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          id
          title
          blocks(postTemplate: false)
        }
        ... on Property {
          id
          title
          blocks(postTemplate: false)
        }
      }
    }
  `,
    variables: {
      uri,
    },
  };

  const response = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await response.json();
  console.log("--- data from getPageByUri: ", data);
  if (!data) {
    return null;
  }

  const blocks = cleanAndTransformBlocks(data.nodeByUri?.blocks || []);
  return { blocks };
};
