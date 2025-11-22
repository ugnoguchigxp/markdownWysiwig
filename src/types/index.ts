import type { JSONContent, Editor } from '@tiptap/core';

/**
 * Language option for code blocks
 */
export interface ILanguageOption {
  value: string;
  label: string;
}

/**
 * Selection information
 */
export interface ISelectionInfo {
  selectedText: string;
  markdownSyntax: string;
  nodeType: string;
  marks: string[];
  from?: number;
  to?: number;
}

/**
 * Main editor props
 */
export interface IMarkdownEditorProps {
  // Content (required)
  value?: string;                        // Markdown string (preferred)
  onChange?: (value: string) => void;

  // Deprecated / Internal
  initialContent?: string;              // @deprecated Use value instead
  onMarkdownChange?: (markdown: string) => void; // @deprecated Use onChange instead

  // Editor settings
  editable?: boolean;                   // Enable editing (default: true)
  placeholder?: string;                 // Placeholder text (default: "Start writing...")

  // Feature toggles
  enableMermaid?: boolean;              // Mermaid diagrams (default: false)
  enableImage?: boolean;                // Image insertion (default: true)
  enableTable?: boolean;                // Tables (default: true)
  enableCodeBlock?: boolean;            // Code blocks (default: true)
  enableLink?: boolean;                 // Links (default: true)

  // Mermaid settings (required if enableMermaid=true)
  mermaidLib?: unknown;                 // Mermaid library instance

  // Styling
  className?: string;
  style?: React.CSSProperties;

  // Events
  onBlur?: () => void;
  onFocus?: () => void;
  onContentChange?: (content: JSONContent) => void;
  onSelectionChange?: (selectionInfo: ISelectionInfo | null) => void;
  onEditorReady?: (editor: Editor) => void;

  // Advanced settings
  extensions?: unknown[];               // Custom TipTap extensions
  supportedLanguages?: ILanguageOption[]; // Code block languages
  showSyntaxStatus?: boolean;           // Show syntax status bar (default: true)
  showToolbar?: boolean;                // Show toolbar (default: true)
  enableVerticalScroll?: boolean;       // Enable vertical scrolling (default: true)
  autoHeight?: boolean;                 // Auto-adjust height (default: false)
  showDownloadButton?: boolean;         // Show download button (default: false)
  downloadFilename?: string;            // Download filename (default: 'document.md')
  showPasteDebug?: boolean;             // Show paste debug panel (default: false)
}

/**
 * Default text labels (for i18n replacement)
 */
export const DEFAULT_TEXTS = {
  placeholder: 'Start writing...',
  deleteButton: 'Delete',
  renderButton: 'Render',
  cancelButton: 'Cancel',
  editSource: 'Edit Source',
  downloadImage: 'Download Image',
  fullscreen: 'Fullscreen',
  closeFullscreen: 'Close Fullscreen',
  insertTable: 'Insert Table',
  insertCodeBlock: 'Insert Code Block',
  insertImage: 'Insert Image',
  insertLink: 'Insert Link',
  bold: 'Bold',
  italic: 'Italic',
  strikethrough: 'Strikethrough',
  code: 'Inline Code',
  heading1: 'Heading 1',
  heading2: 'Heading 2',
  heading3: 'Heading 3',
  bulletList: 'Bullet List',
  orderedList: 'Ordered List',
  blockquote: 'Blockquote',
  horizontalRule: 'Horizontal Rule',
};
