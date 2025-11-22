# @markdown-wysiwyg/editor

A lightweight Markdown WYSIWYG editor for React, powered by TipTap.

## Features

- ✅ Rich text editing with Markdown syntax
- ✅ Code blocks with syntax highlighting (19 languages)
- ✅ Table editing with context menu and resize controls
- ✅ Optional Mermaid diagram support
- ✅ Optional image insertion
- ✅ Bidirectional Markdown conversion
- ✅ Link context menu
- ✅ TypeScript support

## Installation

### Basic

```bash
pnpm add @markdown-wysiwyg/editor
```

### With Mermaid (optional)

```bash
pnpm add @markdown-wysiwyg/editor mermaid
```

## Quick Start

### Basic Usage

```tsx
import { MarkdownEditor } from '@markdown-wysiwyg/editor';
import '@markdown-wysiwyg/editor/style.css';

function App() {
  const [content, setContent] = useState('');

  return <MarkdownEditor value={content} onChange={setContent} />;
}
```

### With Mermaid

```tsx
import mermaid from 'mermaid';
import { MarkdownEditor } from '@markdown-wysiwyg/editor';
import '@markdown-wysiwyg/editor/style.css';

mermaid.initialize({ startOnLoad: false });

function App() {
  const [content, setContent] = useState('');

  return (
    <MarkdownEditor
      value={content}
      onChange={setContent}
      enableMermaid={true}
      mermaidLib={mermaid}
    />
  );
}
```

### Disable Features

```tsx
<MarkdownEditor
  value={content}
  onChange={setContent}
  enableImage={false}  // Disable image functionality
  enableTable={false}  // Disable table functionality
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Markdown content (required) |
| `onChange` | `(value: string) => void` | - | Change handler (required) |
| `editable` | `boolean` | `true` | Enable editing |
| `placeholder` | `string` | `'Start typing...'` | Placeholder text |
| `enableMermaid` | `boolean` | `false` | Enable Mermaid diagrams (requires mermaid) |
| `enableImage` | `boolean` | `true` | Enable image insertion |
| `enableTable` | `boolean` | `true` | Enable table editing |
| `enableCodeBlock` | `boolean` | `true` | Enable code blocks |
| `enableLink` | `boolean` | `true` | Enable links |
| `mermaidLib` | `typeof mermaid` | - | Mermaid instance (required if enableMermaid=true) |
| `className` | `string` | - | Additional CSS class |
| `style` | `React.CSSProperties` | - | Inline styles |
| `onBlur` | `() => void` | - | Blur event handler |
| `onFocus` | `() => void` | - | Focus event handler |
| `extensions` | `Extension[]` | - | Custom TipTap extensions |

## Supported Languages (Code Blocks)

- JavaScript/TypeScript
- Python
- Java
- Go
- Rust
- PHP
- HTML/CSS
- SQL
- Bash/Shell (sh, zsh, tcsh)
- JSON/YAML/XML
- Mermaid (if enabled)

## Bundle Size

- Without Mermaid: ~150KB (gzipped)
- With Mermaid: +2.5MB (user installs separately)

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 15+, Chrome Android

## Examples

See the `example/` directory for more usage examples.

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build package
pnpm build

# Run tests
pnpm test

# Lint
pnpm lint
```

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Credits

Built with:
- [TipTap](https://tiptap.dev/)
- [Lowlight](https://github.com/wooorm/lowlight)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Mermaid](https://mermaid.js.org/) (optional)
