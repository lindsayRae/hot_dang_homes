import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";
// if level comes back as undefined we want to default it to 2
export const Heading = ({ textAlign, content, level = 2 }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading text-white max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
