import type { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ContentEditable, EditorContainer, Placeholder } from "./styled";
import { AutoFocusPlugin } from "./plugins/auto-focus-plugin";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "SampleEditor",
  onError: (error) => console.error(error),
};

export type EditorProps = {
  placeholder?: string;
  autoFocus?: boolean;
}

export const Editor: FC<EditorProps> = ({
  placeholder,
  autoFocus,
}) => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <EditorContainer>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<Placeholder>{placeholder}</Placeholder>}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </EditorContainer>
      <AutoFocusPlugin autoFocus={autoFocus} />
    </LexicalComposer>
  );
};
