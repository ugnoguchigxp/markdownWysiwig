import { useState } from 'react';
import { MarkdownEditor } from '@markdown-wysiwyg/editor';
import '@markdown-wysiwyg/editor/style.css';
import mermaid from 'mermaid';
import './App.css';

function App() {
  const [content, setContent] = useState<string>('# Hello Markdown Editor\n\nThis is a demo of the **Markdown WYSIWYG Editor**.\n\n## Features\n\n- Rich text editing\n- Markdown syntax support\n- Tables\n- Mermaid diagrams\n\n```mermaid\ngraph TD;\n    A-->B;\n    A-->C;\n    B-->D;\n    C-->D;\n```\n');
  const [isEditable, setIsEditable] = useState(true);

  return (
    <div className="app-container">
      <header>
        <h1>Markdown Editor Demo</h1>
        <div className="controls">
          <label>
            <input
              type="checkbox"
              checked={isEditable}
              onChange={(e) => setIsEditable(e.target.checked)}
            />
            Editable
          </label>
        </div>
      </header>

      <main>
        <div className="editor-wrapper">
          <MarkdownEditor
            value={content}
            onChange={setContent}
            editable={isEditable}
            mermaidLib={mermaid}
            enableMermaid={true}
            placeholder="Type your markdown here..."
            className="my-editor"
            autoHeight={true}
            showDownloadButton={true}
          />
        </div>

        <div className="preview-wrapper">
          <h2>Raw Markdown Output</h2>
          <pre className="preview-content">
            {content}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
