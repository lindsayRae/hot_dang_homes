// import { getPageByUri } from "utils/getPageByUri";
// import { getPageSeo } from "utils/getPageSeo";
import { BlockRenderer } from "components/BlockRenderer";
import { getHomePage } from "../utils/getHomePage";
import { getPageByUri } from "../utils/getPageByUri";
import { notFound } from "next/navigation";

export default async function Page() {
  const data = await getHomePage("/");

  if (!data) {
    return notFound();
  }
  return (
    <div>
      <BlockRenderer blocks={data.blocks} />
    </div>
  );
}
