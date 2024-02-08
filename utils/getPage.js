import { cleanAndTransformBlocks } from "../utils/cleanAndTransformBlocks";
export const getPage = async (uri) => {
  const params = {
    query: `query NewQuery {
            nodeByUri(uri: "/") {
              ... on Page {
                id
                blocks(postTemplate: false)
              }
            }
          }`,
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

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  return blocks;
};
