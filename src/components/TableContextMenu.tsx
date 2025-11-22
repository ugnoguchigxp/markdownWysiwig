/**
 * TableContextMenu - Table operation context menu
 */

import React from 'react';

export interface ITableContextMenuProps {
  isVisible: boolean;
  position: { x: number; y: number };
  onClose: () => void;
  onAddRowAbove: () => void;
  onAddRowBelow: () => void;
  onAddColumnBefore: () => void;
  onAddColumnAfter: () => void;
  onDeleteRow: () => void;
  onDeleteColumn: () => void;
  onDeleteTable: () => void;
}

export const TableContextMenu: React.FC<ITableContextMenuProps> = ({
  isVisible,
  position,
  onClose,
  onAddRowAbove,
  onAddRowBelow,
  onAddColumnBefore,
  onAddColumnAfter,
  onDeleteRow,
  onDeleteColumn,
  onDeleteTable,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 bg-white border border-gray-300 rounded-lg shadow-lg py-2 min-w-48"
      style={{
        left: position.x,
        top: position.y,
        maxHeight: '400px',
        overflowY: 'auto'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mb-1">
        Row Operations
      </div>

      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
        onClick={() => {
          onAddRowAbove();
          onClose();
        }}
      >
        <span className="text-blue-500">⬆️</span>
        Add Row Above
      </button>

      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
        onClick={() => {
          onAddRowBelow();
          onClose();
        }}
      >
        <span className="text-blue-500">⬇️</span>
        Add Row Below
      </button>

      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 flex items-center gap-2"
        onClick={() => {
          onDeleteRow();
          onClose();
        }}
      >
        <span className="text-red-500">🗑️</span>
        Delete Row
      </button>

      <div className="border-t border-gray-100 my-1"></div>

      <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
        Column Operations
      </div>

      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
        onClick={() => {
          onAddColumnBefore();
          onClose();
        }}
      >
        <span className="text-green-500">⬅️</span>
        Add Column Left
      </button>

      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
        onClick={() => {
          onAddColumnAfter();
          onClose();
        }}
      >
        <span className="text-green-500">➡️</span>
        Add Column Right
      </button>

      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 flex items-center gap-2"
        onClick={() => {
          onDeleteColumn();
          onClose();
        }}
      >
        <span className="text-red-500">🗑️</span>
        Delete Column
      </button>

      <div className="border-t border-gray-100 my-1"></div>

      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 flex items-center gap-2"
        onClick={() => {
          onDeleteTable();
          onClose();
        }}
      >
        <span className="text-red-500">🗑️</span>
        Delete Entire Table
      </button>

      <div className="border-t border-gray-100 my-1"></div>

      <button
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-600"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};
