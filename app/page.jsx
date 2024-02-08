// import { getPageByUri } from "utils/getPageByUri";
// import { getPageSeo } from "utils/getPageSeo";
import { BlockRenderer } from "components/BlockRenderer";

import { getPage } from "../utils/getPage";

export default async function Page() {
  const data = await getPage("/");

  return <BlockRenderer blocks={data} />;
}

// export async function generateMetadata() {
//   const seo = await getPageSeo("/");
//   return {
//     title: seo.title,
//     description: seo.metaDesc,
//   };
// }
