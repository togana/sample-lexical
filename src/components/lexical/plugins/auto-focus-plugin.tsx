import { type FC, useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export type AutoFocusPluginProps = {
  autoFocus?: boolean
};

export const AutoFocusPlugin: FC<AutoFocusPluginProps> = ({
  autoFocus,
}) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (autoFocus) {
      editor.focus();
    }
  }, [autoFocus, editor]);

  return null;
};
