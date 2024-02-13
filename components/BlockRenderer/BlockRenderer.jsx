"use client";
import { CallToActionButton } from "components/CallToActionButton";
// import { Column } from "components/Column";
// import { Columns } from "components/Columns";

// import { FormspreeForm } from "components/FormspreeForm";
// import { Gallery } from "components/Gallery";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
// import { PropertyFeatures } from "components/PropertyFeatures";
// import { PropertySearch } from "components/PropertySearch";
// import { TickItem } from "components/TickItem";
// import Image from "next/image";
import { theme } from "theme";

import { Cover } from "components/Cover";

export const BlockRenderer = ({ blocks }) => {
  //console.log("***** in blocks: ", blocks);

  return blocks.map((block) => {
    switch (block.name) {
      // case "acf/propertyfeatures": {
      //   return (
      //     <p>Property Features</p>
      //     //   <PropertyFeatures
      //     //     key={block.id}
      //     //     price={block.attributes.price}
      //     //     bathrooms={block.attributes.bathrooms}
      //     //     bedrooms={block.attributes.bedrooms}
      //     //     hasParking={block.attributes.has_parking}
      //     //     petFriendly={block.attributes.pet_friendly}
      //     //   />
      //   );
      // }
      // case "acf/tickitem": {
      //   return (
      //     <p>TickItem</p>
      //     //   <TickItem key={block.id}>
      //     //     <BlockRenderer blocks={block.innerBlocks} />
      //     //   </TickItem>
      //   );
      // }
      // case "core/gallery": {
      //   return (
      //     <p>Gallery</p>
      //     //   <Gallery
      //     //     key={block.id}
      //     //     columns={block.attributes.columns || 3}
      //     //     cropImages={block.attributes.imageCrop}
      //     //     items={block.innerBlocks}
      //     //   />
      //   );
      // }
      // case "acf/formspreeform": {
      //   return (
      //     <p>FormSpreeForm</p>
      //     //   <FormspreeForm
      //     //     key={block.id}
      //     //     formId={block.attributes.data.form_id}
      //     //   />
      //   );
      // }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      // case "core/post-title":
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      // case "acf/propertysearch": {
      //   return <p>Property Search</p>;
      //   // return <PropertySearch key={block.id} />;
      // }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
          //   <Cover
          //     key={block.id}
          //     background={block.attributes.url.replace("https:", "http:")}
          //   >
          //     <BlockRenderer blocks={block.innerBlocks} />
          //   </Cover>
        );
      }
      // case "core/columns": {
      //   return (
      //     <p>Columns</p>
      //     //   <Columns
      //     //     key={block.id}
      //     //     isStackedOnMobile={block.attributes.isStackedOnMobile}
      //     //     textColor={
      //     //       theme[block.attributes.textColor] ||
      //     //       block.attributes.style?.color?.text
      //     //     }
      //     //     backgroundColor={
      //     //       theme[block.attributes.backgroundColor] ||
      //     //       block.attributes.style?.color?.background
      //     //     }
      //     //   >
      //     //     <BlockRenderer blocks={block.innerBlocks} />
      //     //   </Columns>
      //   );
      // }
      // case "core/column": {
      //   return (
      //     <p>Single Column</p>
      //     //   <Column
      //     //     key={block.id}
      //     //     width={block.attributes.width}
      //     //     textColor={
      //     //       theme[block.attributes.textColor] ||
      //     //       block.attributes.style?.color?.text
      //     //     }
      //     //     backgroundColor={
      //     //       theme[block.attributes.backgroundColor] ||
      //     //       block.attributes.style?.color?.background
      //     //     }
      //     //   >
      //     //     <BlockRenderer blocks={block.innerBlocks} />
      //     //   </Column>
      //   );
      // }
      // case "core/group":
      // case "core/block": {
      //   return <p>BlockRenderer</p>;
      //   // return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      // }
      // case "core/image": {
      //   return (
      //     <p>Image</p>
      //     //   <Image
      //     //     key={block.id}
      //     //     src={block.attributes.url.replace("https:", "http:")}
      //     //     height={block.attributes.height}
      //     //     width={block.attributes.width}
      //     //     alt={block.attributes.alt || ""}
      //     //     priority="low"
      //     //   />
      //   );
      // }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  });
};
