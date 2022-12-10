export { AutoLinkNode } from '@lexical/link';
import { AutoLinkPlugin as LexicalAutoLinkPlugin } from "@lexical/react/LexicalAutoLinkPlugin";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalEditor } from 'lexical';
import { useEffect } from 'react';

const URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const MATCHERS = [
  (text: string) => {
    const match = URL_MATCHER.exec(text);
    if (match === null) {
      return null;
    }
    const fullMatch = match[0];
    return {
      index: match.index,
      length: fullMatch.length,
      text: fullMatch,
      url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
    };
  },
];

const getLinkDomNode = (
  event: MouseEvent,
  editor: LexicalEditor,
): HTMLAnchorElement | null => editor.getEditorState().read(() => {
  const domNode = event.target;

  if ((domNode instanceof HTMLAnchorElement)) {
    return domNode;
  }

  if (domNode instanceof Node && domNode.parentNode && domNode.parentNode instanceof HTMLAnchorElement) {
    return domNode.parentNode;
  }

  return null;
});

const ClickableLinkPlugin = (): JSX.Element | null => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const linkDomNode = getLinkDomNode(event, editor);

      if (linkDomNode === null) {
        return;
      }

      const href = linkDomNode.getAttribute('href');
      if (
        linkDomNode.getAttribute('contenteditable') === 'false' ||
        href === null
      ) {
        return;
      }

      window.open(href, '_blank');
    }

    return editor.registerRootListener(
      (
        rootElement: null | HTMLElement,
        prevRootElement: null | HTMLElement,
      ) => {
        if (prevRootElement !== null) {
          prevRootElement.removeEventListener('click', onClick);
        }

        if (rootElement !== null) {
          rootElement.addEventListener('click', onClick);
        }
      },
    );
  }, [editor]);
  return null;
}

export const AutoLinkPlugin = () => {
  return (
    <>
      <LexicalAutoLinkPlugin matchers={MATCHERS} />
      <ClickableLinkPlugin />
    </>
  );
}

