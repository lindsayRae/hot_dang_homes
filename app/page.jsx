// import { getPageByUri } from "utils/getPageByUri";
import { getPageSeo } from "utils/getPageSeo";
import { BlockRenderer } from "components/BlockRenderer";

import { getPageByUri } from "../utils/getPageByUri";
import { notFound } from "next/navigation";

export default async function Page() {
  const data = await getPageByUri("/");

  if (!data) {
    return notFound();
  }
  return (
    <div>
      <BlockRenderer blocks={data.blocks} />
    </div>
  );
}

export async function generateMetadata() {
  const seo = await getPageSeo("/");
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}

// export async function generateMetadata({ params }) {
//   const seo = await getPageSeo(params.slug.join("/"));
//   return {
//     title: seo.title || "",
//     description: seo.metaDesc || "",
//   };
// }
