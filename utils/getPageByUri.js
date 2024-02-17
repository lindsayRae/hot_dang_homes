import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
export const getPageByUri = async (uri) => {
  const params = {
    query: `
    query PagesQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          blocks(postTemplate: false)
        }
        ... on Property {
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

  if (!data) {
    return null;
  }

  const blocks = cleanAndTransformBlocks(data.nodeByUri?.blocks || []);
  return { blocks };
};
