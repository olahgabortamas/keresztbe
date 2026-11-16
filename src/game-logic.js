export const fold = value => (value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// The highlighted cell is the next insertion point after typing, but a cell
// the player clicked directly is the deletion target.
export function backspaceIndex(values, cells, activeCell, justAdvanced) {
  const position = Math.max(0, cells.indexOf(activeCell));
  if (justAdvanced && position > 0) return position - 1;
  if (!values[cells[position]] && position > 0) return position - 1;
  return position;
}
