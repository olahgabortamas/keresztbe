export const fold = value => (value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const timeLimitMinutes = size => size <= 15 ? 30 : size <= 19 ? 45 : 60;
export const timeBonus = (seconds, size) => Math.max(0, Math.ceil((timeLimitMinutes(size) * 60 - seconds) / 60) * 10);
export const comboBonus = streak => Math.min(50,Math.max(0,streak-1)*10);

// The highlighted cell is the next insertion point after typing, but a cell
// the player clicked directly is the deletion target.
export function backspaceIndex(values, cells, activeCell, justAdvanced) {
  const position = Math.max(0, cells.indexOf(activeCell));
  if (justAdvanced && position > 0) return position - 1;
  if (!values[cells[position]] && position > 0) return position - 1;
  return position;
}
