import { v4 as uuid } from "uuid";

//! Course description Section 2: #7 min: 7
//! WP does not have IDs for Glutenburg Block... this will create those ids that we can use in li for unique key

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON));

  //? set ID for each block and innerBlock
  //* recursive function
  const assignId = (b) => {
    b.forEach((block) => {
      block.id = uuid();
      if (!block.attributes) {
        block.attributes = {};
      }
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(blocks);

  return blocks;
};
