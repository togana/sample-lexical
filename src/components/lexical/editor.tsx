import type { ComponentProps, FC } from "react";
import type { EditorFocusOptions } from "lexical/LexicalEditor";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoLinkPlugin, AutoLinkNode } from "./plugins/auto-link-plugin";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ContentEditable, EditorContainer, Placeholder } from "./styled";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "SampleEditor",
  nodes: [
    AutoLinkNode,
  ],
  onError: (error) => console.error(error),
};

export type EditorProps = {
  placeholder?: string;
  autoFocus?: boolean;
  history?: boolean;
  autoLink?: boolean;
} & EditorFocusOptions;

export const Editor: FC<EditorProps> = ({
  placeholder,
  autoFocus,
  history,
  autoLink,
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
      {history ? <HistoryPlugin /> : <></>}
      {autoLink ? <AutoLinkPlugin /> : <></>}
    </LexicalComposer>
  );
};
