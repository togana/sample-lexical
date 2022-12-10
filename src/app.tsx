import type { FC } from "react";
import { Editor } from "./components/lexical";

export const App: FC = () => {
  return (
    <div>
      <Editor
        autoFocus
        history
        placeholder="いまなにしている？"
      />
    </div>
  );
}
