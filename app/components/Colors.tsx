export const primaryColors = ["#074404", "#29860b", "#429613", "#629e07", "#7cbf36", "#91c129"];
export const secondaryColors = ["#418416", "#649c42", "#76a36d", "#82ad85", "#9ec47f"];
export const templateColors = ["#34cf97", "#27b27f", "#3f85f6", "#689ff8"];
export const backgroundColors = ["#f8fafc"];
export function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
