import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
export const getHomePage = async (uri) => {
  //! why does uri not work?
  console.log("**", uri);
  const params = {
    query: `query PageQuery($uri: String!)  {
      nodeByUri(uri: $uri) {
        id
        ... on Page {
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
  console.log("--- data from GET HOME: ", data);
  // if (!data) {
  //   return null;
  // }

  const blocks = cleanAndTransformBlocks(data?.nodeByUri?.blocks || []);
  return blocks;
};
