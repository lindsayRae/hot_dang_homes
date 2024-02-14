import { getPageByUri } from "utils/getPageByUri";
// import { getPageSeo } from "utils/getPageSeo";
import { BlockRenderer } from "components/BlockRenderer";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const data = await getPageByUri(`${params.slug.join("/")}`);
  console.log("_________ data in slug page: ", data);
  if (!data) {
    return notFound();
  }
  return <BlockRenderer blocks={data.blocks} />;
}
// export async function generateMetadata({ params }) {
//   const seo = await getPageSeo(params.slug.join("/"));
//   return {
//     title: seo.title || "",
//     description: seo.metaDesc || "",
//   };
// }
