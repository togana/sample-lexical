import type { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { styled } from "@stitches/react";
import { Placeholder } from "./placeholder";
import { ContentEditable } from "./content-editable";

const EditorContainer = styled('div', {
  position: 'relative',
});

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "SampleEditor",
  onError: (error) => console.error(error),
};

export type EditorProps = {
  placeholder?: string;
}

export const Editor: FC<EditorProps> = ({
  placeholder,
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
    </LexicalComposer>
  );
};
