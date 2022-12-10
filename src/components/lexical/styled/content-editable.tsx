import { styled } from "@stitches/react";
import { ContentEditable as _ContentEditable } from "@lexical/react/LexicalContentEditable";

export const ContentEditable = styled(_ContentEditable, {
  outline: 'none',
  border: '1px solid #ccc',
  padding: '0.5rem',
  '> p': {
    margin: 0,
  },
});
