import type { ComponentProps, FC } from "react";
import type { EditorFocusOptions } from "lexical/LexicalEditor";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ContentEditable, EditorContainer, Placeholder } from "./styled";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "SampleEditor",
  onError: (error) => console.error(error),
};

export type EditorProps = {
  placeholder?: string;
  autoFocus?: boolean;
} & EditorFocusOptions;

export const Editor: FC<EditorProps> = ({
  placeholder,
  autoFocus,
  defaultSelection,
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
      {autoFocus ? <AutoFocusPlugin defaultSelection={defaultSelection} /> : <></>}
    </LexicalComposer>
  );
};
